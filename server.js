/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
'use strict';

// BASE SETUP
// =============================================================================

// call the packages we need
require('dotenv').config({silent: true});
const express     = require('express'); // call express
const app         = express();          // define our app using express
const bodyParser  = require('body-parser');
const path        = require('path');
const matrixCtrl  = require('./controllers/scholarships');
const router      = express.Router(); // get an instance of the express Router

app.set('superSecret', process.env.SECRET); // secret variable

/* Configure app to use bodyParser()
 * this will let us get the data from a POST
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// REGISTER OUR ROUTES -------------------------------

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'x-access-token');
  next();
});

// all of our routes will be prefixed with /api/v#
app.use('/api/' + process.env.API_VERSION, router);

// Serves swagger UI at the root.
app.use('/', express.static(path.join(__dirname, 'docs')));

//(accessed at GET localhost:3000/api/v#)
router.route('/').get(matrixCtrl.getWelcome);

//Creates endpoint handler for /max_scholarship
router.route('/max_scholarship').post(matrixCtrl.postMatrix)

// CONFIGURE & START THE SERVER
// =============================================================================
let port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Node.js listening on port ' + port);
});
