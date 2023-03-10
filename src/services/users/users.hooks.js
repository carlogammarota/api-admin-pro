const { authenticate } = require('@feathersjs/authentication').hooks;
const checkPermissions = require('feathers-permissions');

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [
      authenticate('jwt'),
      checkPermissions({
        roles: [ 'admin' ]
      })
    ],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    // create: [ authenticate('jwt') ,hashPassword('password') ],
    create: [ hashPassword('password') ],
    update: [ authenticate('jwt') ],
    patch: [  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
