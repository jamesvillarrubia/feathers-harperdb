/* eslint-disable no-unused-vars */
const { _ } = require('@feathersjs/commons');
const { AdapterService } = require('@feathersjs/adapter-commons');
const errors = require('@feathersjs/errors');
const harperive = require('harperive');
const knex = require('knex')({ client: 'pg' });
const { isPlainObject } = require('is-plain-object');

const DB_CONFIG = {
  harperHost: 'https://test-1-mtc.harperdbcloud.com',
  username: 'admin',
  password: 'admin',
  // token: process.env.OPERATION_TOKEN, // pass either username/password or token
  schema: 'test_schema' // optional params

  /* Alternatively schema can be passed in the options while quering for any operations on specific schema.
  *  Refer bewlow on how to execute operation for more clarification.
  */
};

const METHODS = {
  $or: 'orWhere',
  $and: 'andWhere',
  $ne: 'whereNot',
  $in: 'whereIn',
  $nin: 'whereNotIn'
};

const OPERATORS = {
  $lt: '<',
  $lte: '<=',
  $gt: '>',
  $gte: '>=',
  $like: 'like',
  $notlike: 'not like',
  $ilike: 'ilike'
};

const Client = harperive.Client;

// const errorHandler = (error) => {
//   return Error(error);
// };

class Service extends AdapterService {
  constructor (options = {}) {
    super(options);
    this.client = new Client(DB_CONFIG);
    this.table = 'books';
    this.schema = 'test_schema';
    this.idProp = 'id';
    this.recordSchema = {
      first_name: null,
      last_name: null,
      user_id: null,
      username: null
    };
  }

  // async _find (params) {
  //   const { filters, query } = this.filterQuery(params);
  //   console.log('find', filters, query);
  //   const options = {
  //     operation: 'search_by_conditions',
  //     operator: OPERATOR[query.$or] || OPERATOR.default,
  //     // offset:  filters.$skip,
  //     limit: filters.$limit,
  //     get_attributes: filters.$select,
  //     schema: this.schema,
  //     table: this.table,
  //     conditions:[{
  //       search_attribute: 'first_name',
  //       search_type:'equals',
  //       search_value:'Teddy'
  //     }]
  //   };
  //   return this.client.executeOperation(options);
  // }

  async _find (params) {
    let query = {
      hair: 'brown',
      eyes: { $in:['blue','hazel']},
      $or: [
        { name: 'Doug' },
        {
          eyes: 'blue',
          $or:[
            { age: {
              $gte: 18,
              $lt: 25
            }},
            { name:'Tommy'}
         
          ]
        }
      ],
      $sort: { name: 1 }
    };
    let q = this.createQuery({query});
    // console.log(q);
    // return this.client.executeOperation(options);
  }

  async _get (id, params = {}) {
    // console.log(params);
    // params.query = {
    //   '$or':[{
    //     name:'Johnny'
    //   },{
    //     name:'timmy'
    //   }]
    // };
    const query = params.query || {};
    const select = query.$select || [];
    const options = {
      // schema is not passed here since it has been passed while creating client
      table: this.table,
      hashValues: [`${id}`],
      attributes: select.length ? [...select, this.idProp] : ['*']
    };
    const filtered = this.filterQuery(params);
    console.log('filtered', filtered);
    const result = await this.client.searchByHash(options);
    if (result.statusCode === 200) {
      console.log(result.data[0]);
      return result.data[0];
    } else {
      console.log(result);
    }
  }

  async _create (data, params) {
    // validate fields
    const options = {
      operation: 'insert',
      schema: this.schema,
      table: this.table,
      records: Array.isArray(data) ? data : [data]
    };
    const result = await this.client.insert(options);
    if (result.statusCode === 200) {
      const hashes = result.data.inserted_hashes;
      const options = {
        table: this.table,
        hashValues: hashes,
        attributes: ['*']
      };
      // console.log(result);

      const found = await this.client.searchByHash(options);
      return found.data[0];
    }
  }

  defaultOrUndefined (data) {
    return {
      ...this.recordSchema
      // ...data
    };
  }

  async _update (id, data, params) {
    const options = {
      schema: this.schema,
      table: this.table,
      records: [{
        ...this.defaultOrUndefined(data),
        id
      }]
    };
    const result = await this.client.update(options);
    if (result.statusCode === 200) {
      const hashes = result.data.update_hashes;
      const options = {
        table: this.table,
        hashValues: hashes,
        attributes: ['*']
      };
      return this.client.searchByHash(options);
    } else {
      throw new errors.BadRequest('Could not fetch updated record.', result);
    }
  }

  async _patch (id, data, params) {
    const options = {
      schema: this.schema,
      table: this.table,
      records: [{
        ...data,
        id
      }]
    };
    const result = await this.client.update(options);
    if (result.statusCode === 200) {
      const hashes = result.data.update_hashes;
      const options = {
        table: this.table,
        hashValues: hashes,
        attributes: ['*']
      };
      return this.client.searchByHash(options);
    } else {
      throw new errors.BadRequest('Could not fetch updated record.', result);
    }
  }

  async _remove (id, params) {
    const options = {
      schema: this.schema,
      table: this.table,
      hashValues: [id]
    };
    return await this.client.delete(options);
  }

  knexify (query, params, parentKey) {
    Object.keys(params || {}).forEach(key => {
      const value = params[key];

      if (isPlainObject(value)) {
        return this.knexify(query, value, key);
      }

      // const self = this;
      const column = parentKey || key;
      const method = METHODS[key];
      const operator = OPERATORS[key] || '=';

      if (method) {
        if (key === '$or' || key === '$and') {
          const self = this;

          return query.where(function () {
            return value.forEach((condition) => {
              this[method](function () {
                self.knexify(this, condition);
              });
            });
          });
        }
        // eslint-disable-next-line no-useless-call
        return query[method].call(query, column, value);
      }

      return operator === '='
        ? query.where(column, value)
        : query.where(column, operator, value);
    });

    return query;
  }

  createQuery (params = {}){
    const { schema, table, id } = this;
    const { filters, query } = this.filterQuery(params);
    let q = knex(table);
    
    if (schema) {
      q = q.withSchema(schema).from(`${table} as ${table}`);
    }
    
    // $select uses a specific find syntax, so it has to come first.
    q = filters.$select
      // always select the id field, but make sure we only select it once
      ? q.select([...new Set([...filters.$select, `${table}.${id}`])])
      : q.select([`${table}.*`]);
    
    // build up the knex query out of the query params
    this.knexify(q, query);
    
    // Handle $sort
    if (filters.$sort) {
      Object.keys(filters.$sort).forEach(key => {
        q = q.orderBy(key, filters.$sort[key] === 1 ? 'asc' : 'desc');
      });
    }
    // console.log(q.toString());
    console.log(q.toSQL().toNative());
    console.log(q.toString());
    return q;
  }
}

module.exports = options => {
  return new Service(options);
};

module.exports.Service = Service;

const test = new Service();

// test._get('54a34160-38f8-439f-86d5-75afd106d63c').then(
//   r => console.log('_get', r)
// );
test._find({
  query: {
    $limit: 10,
    $skip: 2,
    $select: ['first_name'],
    $or: [
      { name: 'Johny' }
    ]
  }
}).then(
  r => console.log('_get', r)
).catch(e=>console.log(e));

// test._create({
//   first_name: 'Teddy',
//   last_name: 'Roosevelt',
//   user_id: 500,
//   username: 'roosevelt1'
// }).then(
//   r => console.log('_create', r)
// ).catch(e => console.log(e));

// test._update(
//   '54a34160-38f8-439f-86d5-75afd106d63c',
//   {
//     first_name: 'JohnnyUpdate',
//     last_name: 'Roosevelt'
//   }).then(
//   r => console.log('_update', r)
// ).catch(e => console.log(e));

// test._patch(
//   '54a34160-38f8-439f-86d5-75afd106d63c',
//   {
//     first_name: 'JohnnyPatch',
//     last_name: 'Roosevelt',
//     user_id: 500,
//     username: 'roosevelt1'
//   }).then(
//   r => console.log('_patch', r)
// ).catch(e => console.log(e));

// test._create({
//   first_name: 'TeddyRemoved',
//   last_name: 'Roosevelt',
//   user_id: 500,
//   username: 'roosevelt1'
// }).then(r => {
//   console.log(r);
//   return test._remove(r.data[0].id).then(
//     r => console.log('_remove', r)
//   ).catch(e => console.log(e));
// });
