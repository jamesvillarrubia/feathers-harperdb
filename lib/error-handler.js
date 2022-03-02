/* eslint-disable no-unused-vars */
const errors = require('@feathersjs/errors');
const ERROR = Symbol('feathers-knex/error');

module.exports = function errorHandler (error) {
  const { message } = error;
  let feathersError = error;

  if (error.error) { console.log(error.error); }
  if (error.operation === 'create_schema') {
    feathersError = new errors.BadRequest(error.error, { ...error });
  }
  if (error.operation === 'create_table') {
    feathersError = new errors.BadRequest(error.error, { ...error });
  }
  throw feathersError;
};

Object.assign(module.exports, { ERROR });
