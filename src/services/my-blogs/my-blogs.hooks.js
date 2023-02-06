const { authenticate } = require('@feathersjs/authentication').hooks;

const returnMyBlogs = require('../../hooks/return-my-blogs');

module.exports = {
  before: {
    // all: [ authenticate('jwt') ],
    // find: [ returnMyBlogs() ],
    get: [ returnMyBlogs() ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
