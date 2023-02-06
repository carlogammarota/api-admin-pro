const users = require('./users/users.service.js');
const blog = require('./blog/blog.service.js');
const myBlogs = require('./my-blogs/my-blogs.service.js');
const payments = require('./payments/payments.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(blog);
  app.configure(myBlogs);
  app.configure(payments);
};
