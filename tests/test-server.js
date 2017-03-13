/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "expect, done" }]*/
/*global describe it */
'use strict';

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const api = require('../controllers/scholarships.js');
chai.should();
chai.use(chaiHttp);

describe('Test for server response', () => {

  it('GET /: Responds with JSON Message', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.be.a('string');
        res.body.should.be.eql({
          message: "Welcome, lets find your best scholarships!"
        });
        if (err) throw err;
        done();
      });
  });
  it('POST /max_scholarship: It should return an object with properties sequence and total', (done) => {
    const matrix = {
      data: [[1,2,3,4,5], [1,1,2,3,5], [3,4,5,5,5], [3,4,5,9,5], [1,1,5,5,25]]
    }
    chai.request(server)
      .post('/max_scholarship')
      .send(matrix)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('sequence');
        res.body.sequence.should.be.a('array');
        res.body.should.have.property('total');
        res.body.total.should.be.a('number');
        if (err) throw err;
        done();
      });
  });

});

describe('Test API inner functions', () => {
});
