/* eslint-disable no-unused-vars */
const adapterTests = require('@feathersjs/adapter-tests');
const errors = require('@feathersjs/errors');
const feathers = require('@feathersjs/feathers');

const serviceLib = require('../lib');

const testSuite = adapterTests([
  '.options',
  '.events',
  '._get',
  '._find',
  '._create',
  '._update',
  '._patch',
  '._remove',
  '.get',
  '.get + $select',
  '.get + id + query',
  '.get + NotFound',
  '.get + id + query id',
  '.find',
  '.remove',
  '.remove + $select',
  '.remove + id + query',
  '.remove + multi',
  '.remove + id + query id',
  '.update',
  '.update + $select',
  '.update + id + query',
  '.update + NotFound',
  '.update + id + query id',
  '.patch',
  '.patch + $select',
  '.patch + id + query',
  '.update + query + NotFound',
  '.patch multiple',
  '.patch multi query same',
  '.patch multi query changed',
  '.patch + query + NotFound',
  '.patch + NotFound',
  '.patch + id + query id',
  '.create',
  '.create + $select',
  '.create multi',
  'internal .find',
  'internal .get',
  'internal .create',
  'internal .update',
  'internal .patch',
  'internal .remove',
  '.find + equal',
  '.find + equal multiple',
  '.find + $sort',
  '.find + $sort + string',
  '.find + $limit',
  '.find + $limit 0',
  '.find + $skip',
  '.find + $select',
  '.find + $or',
  '.find + $in',
  '.find + $nin',
  '.find + $lt',
  '.find + $lte',
  '.find + $gt',
  '.find + $gte',
  '.find + $ne',
  '.find + $gt + $lt + $sort',
  '.find + $or nested + $sort',
  '.find + paginate',
  '.find + paginate + $limit + $skip',
  '.find + paginate + $limit 0',
  '.find + paginate + params'
]);

describe('Feathers HarperDB - Adapter Tests', async () => {
  const events = ['testing']; // not sure why this is needed
  const app = feathers();

  const service = serviceLib({ events });

  it('creates the schema and table', async () => {
    const db = await service.createDB('test_schema').catch(e => {});
    const table = await service.createTable('books').catch(e => {});
  });

  app.use('/mock-service', service);
  app.service('/mock-service').hooks();

  testSuite(app, errors, 'mock-service');

  // before(async () => {
  //   console.log('setting up');
  //   app.service('/mock-service').setup();
  // });

  after(async () => {
    await app.service('/mock-service')
      .find()
      .then(resp => {
        return Promise.all(resp.map(i => {
          console.log('removing ', i.id);
          return app.service('/mock-service')._remove(i.id);
        })).catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  });
});
