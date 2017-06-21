//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Users', () => {
  describe('/GET user', () => {
      it('it should GET a user without errors', (done) => {
        chai.request(server)
            .get('/api/user')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('msg').eql('funcionou');
              done();
            });
      });
  });

  describe('/GET soma', () => {
      it('it should GET soma without errors', (done) => {
        let dados = {
          a: 2,
          b: 100
        }
        chai.request(server)
            .get('/api/soma')
            .send(dados)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('res').eql(103);
              done();
            });
      });
  });
});
