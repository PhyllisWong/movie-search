// test-movies.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Movies', () => {
  // TEST INDEX
  it('should index misc movies on / GET', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });

  it('should show ONE movie /movies/:id GET', (done) => {
    chai.request(server)
      .get(`/movies/424783`) // sample movie id
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });
});
