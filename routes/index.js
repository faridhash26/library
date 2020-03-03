module.exports = (app) => {
  app.use('/', require('./homeroutes'));
  app.use('/auth' , require('./auth.rout'));
  app.use('/user' , require('./user.router'));
  app.use('/customer' , require('./customer.route'));
};
