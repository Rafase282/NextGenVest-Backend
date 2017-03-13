/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
'use strict';

// BASE SETUP
// =============================================================================

// call the packages we need
require('dotenv').config({
  silent: true
});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./controllers/scholarships');

/* Configure app to use bodyParser()
 * this will let us get the data from a POST
 */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// REGISTER OUR ROUTES -------------------------------

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  next();
});

// Serves swagger UI at the root.
app.get('/', (req, res) => res.json({
  message: "Welcome, lets find your best scholarships!"
}));

//Creates endpoint handler for /max_scholarship
app.route('/max_scholarship')
  .post(api.postMatrix)

// CONFIGURE & START THE SERVER
// =============================================================================
const port = process.env.PORT || 8080;
app.listen(port,
  () => console.log('Node.js listening on port ' + port)
);

module.exports = app;
