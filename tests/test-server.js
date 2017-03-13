/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "expect" }]*/
/*global describe it */
'use strict';
const request = require('supertest');
const expect = require('chai').expect;
let server = require('../server.js');
server = request.agent('http://localhost:' + process.env.PORT);

describe('SAMPLE unit test', function() {

  it('GET /: Respond with an HTML Site', function(done) {
    server
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, done);
  });

  it('GET /api/v1: Respond with JSON Message', function(done) {
    server
      .get('/api/v1')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  }); // END JSON MSG

});
