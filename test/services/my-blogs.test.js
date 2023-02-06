const assert = require('assert');
const app = require('../../src/app');

describe('\'my-blogs\' service', () => {
  it('registered the service', () => {
    const service = app.service('my-blogs');

    assert.ok(service, 'Registered the service');
  });
});
