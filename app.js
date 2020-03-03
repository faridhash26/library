
const express = require('express');

const app = express();

// middleware
require('./middleware')(app);
// routes
require('./routes')(app);
// error handlers
require('./services/errorhandler')(app);
 
module.exports = app;
   