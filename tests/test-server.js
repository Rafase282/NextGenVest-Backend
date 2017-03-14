/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "expect, done" }]*/
/*global describe it */
'use strict';

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const api = require('../controllers/scholarships');
const expect = require('expect');
chai.should();
chai.use(chaiHttp);


// Global values
const seq = [5, 9, 25];
const data = [
  [1, 2, 3, 4, 5],
  [1, 1, 2, 3, 5],
  [3, 4, 5, 5, 5],
  [3, 4, 5, 9, 5],
  [1, 1, 5, 5, 25]
];
const matrix = {data: data};
const size = 5;
const pick = 3;

describe('Test for server response\n', () => {
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
  it('POST /max_scholarship: It should return an object \nwith properties sequence and total', (done) => {
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

describe('Test API inner functions\n', () => {
  it('Gives the product of a sequence', (done) => {
    const res = api.seqTotal(seq);
    expect(res)
      .toBeA('number', 'The result should be a number.')
      .toEqual(1125, 'The result should be 1125.');
    done();
  });
  it('Takes a matrix and returns a sequence of the right length.', (done) => {
    const res = api.arrToSeq(data, size, pick);
    expect(data).toBeA('array', 'The matrix should be an array.');
    expect(res.length)
      .toEqual(pick, `The sequence lenght should be ${pick}`);
    expect(res)
      .toBeA('array', 'The sequence should be an array.')
      .toEqual(seq, 'It should be the same as seq up top.');

    done();
  });
  it(`Matrix should be  n * n where n = ${size}`, (done) => {
    expect(data).toBeA('array', 'The matrix should be an array.');
    expect(api.valMatrix(data, size))
      .toBeA('boolean', 'It should be a boolean')
      .toBe(true, 'It should be a true');
    done();
  });
});
