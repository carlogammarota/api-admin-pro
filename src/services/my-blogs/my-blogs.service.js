// Initializes the `my-blogs` service on path `/my-blogs`
const { MyBlogs } = require('./my-blogs.class');
const createModel = require('../../models/my-blogs.model');
const hooks = require('./my-blogs.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/my-blogs', new MyBlogs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('my-blogs');

  service.hooks(hooks);
};
