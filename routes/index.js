module.exports = (app) => {

  app.use('/', require('./homeroutes'));
  app.use('/user' , require('./user.router'));
};
