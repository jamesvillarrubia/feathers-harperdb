/* eslint-disable no-unused-vars */
const { _ } = require('@feathersjs/commons');
const { AdapterService } = require('@feathersjs/adapter-commons');
const errors = require('@feathersjs/errors');
const harperive = require('harperive');

const queries = [
  { query: { name: 'Alice' } },
  { query: { name: 'Alice', age: 20 } },
  { query: { $sort: { name: 1 } } },
  { query: { $sort: { name: '1' } } },
  { query: { $limit: 2 } },
  { query: { $limit: 0 } },
  { query: { $sort: { name: 1 }, $skip: 1 } },
  { query: { name: 'Alice', $select: ['name'] } },
  {
    query: {
      $or: [
        { name: 'Alice' },
        { name: 'Bob' }
      ],
      $sort: { name: 1 }
    }
  },
  {
    query: {
      name: {
        $in: ['Alice', 'Bob']
      },
      $sort: { name: 1 }
    }
  },
  {
    query: {
      name: {
        $nin: ['Alice', 'Bob']
      }
    }
  },
  { query: { age: { $lt: 30 } } },
  { query: { age: { $lte: 25 } } },
  { query: { age: { $gt: 30 } } },
  { query: { age: { $gt: 25 } } },
  { query: { age: { $ne: 25 } } },
  {
    query: {
      age: {
        $gt: 18,
        $lt: 30
      },
      $sort: { name: 1 }
    }
  },
  {
    query: {
      $or: [
        { name: 'Doug' },
        {
          age: {
            $gte: 18,
            $lt: 25
          }
        }
      ],
      $sort: { name: 1 }
    }
  }
];

const query = {
  hair: 'brown',
  eyes: { $in: ['blue', 'hazel'] },
  $or: [
    { name: 'Doug' },
    {
      eyes: 'blue',
      $or: [
        {
          age: {
            $gte: 18,
            $lt: 25
          }
        },
        { name: 'Tommy' }

      ]
    }
  ],
  $sort: { name: 1 }
};
