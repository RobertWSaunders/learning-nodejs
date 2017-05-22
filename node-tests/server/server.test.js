const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Hello World!')
    .end(done);
});
