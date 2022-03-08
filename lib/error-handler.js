/* eslint-disable no-unused-vars */
const errors = require('@feathersjs/errors');
const NO_SCHEMA = Symbol('No Schema');
const NO_AUTH = Symbol('No Auth');
const NO_TABLE = Symbol('No Table');
const NO_HOST = Symbol('No Host');
const CREATE_SCHEMA = Symbol('Create Schema');
const CREATE_TABLE = Symbol('Create Table');


function errorHandler (error) {
  switch(error){
  case NO_SCHEMA:
    error = new errors.GeneralError('HarperDB `schema` is required in config.');
    break;
  case NO_HOST:
    error = new errors.GeneralError('HarperDB `harperHost` is required in config.');
    break;
  case NO_TABLE:
    error = new errors.GeneralError('HarperDB `table` is required in config.');
    break;
  case NO_AUTH:
    error = new errors.NotAuthenticated('HarperDB `username` and `password` is required in config.');
    break;
  case CREATE_SCHEMA:
    error = new errors.GeneralError('HarperDB schema was created.');
    break;
  case CREATE_TABLE:
    error = new errors.GeneralError('HarperDB table was created');
    break;
  }
  if(error.error === 'Login failed'){
    error = new errors.NotAuthenticated('HarperDB could not authenticate.');
  }

  throw error;
}

module.exports ={
  default: errorHandler,
  errorHandler,
  NO_AUTH,
  NO_SCHEMA,
  NO_TABLE,
  NO_HOST
};