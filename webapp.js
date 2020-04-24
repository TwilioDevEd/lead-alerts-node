var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var morgan = require('morgan');
var config = require('./config');
const router = require('./controllers/router')();


module.exports = () => {
  // Create Express web app
  var app = express();
  app.set('view engine', 'pug');

  // Use morgan for HTTP request logging
  app.use(morgan('combined'));

  // Serve static assets
  app.use(express.static(path.join(__dirname, 'public')));

  // Parse incoming form-encoded HTTP bodies
  app.use(bodyParser.urlencoded({
      extended: true
  }));

  // Create and manage HTTP sessions for all requests
  app.use(session({
      secret: config.secret,
      resave: true,
      saveUninitialized: true
  }));

  // Use connect-flash to persist informational messages across redirects
  app.use(flash());

  // Setup main router to handle requests on base route
  app.use('/', router);

  // Handle 404
  app.use(function (request, response, next) {
      response.status(404);
      response.sendFile(path.join(__dirname, 'public', '404.html'));
  });

  // Unhandled errors (500)
  app.use(function(err, request, response, next) {
      console.error('An application error has occurred:');
      console.error(err);
      console.error(err.stack);
      response.status(500);
      response.sendFile(path.join(__dirname, 'public', '500.html'));
  });

  return app;
}
