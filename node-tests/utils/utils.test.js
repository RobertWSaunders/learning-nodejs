const utils = require('./utils');
//assertion library
const expect = require('expect');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });
  });

  it('should verify first name and last names are set', () => {
    var user = {
      age: 23,
    }
    var returnedUser = utils.setName(user, 'Robert Saunders');
    expect(returnedUser).toInclude({
      firstName: 'Robert',
      lastName: 'Saunders'
    });
  });

  //have to add the async param
  it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3,(sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  //have to add the async param
  it('should async square a number', (done) => {
    utils.square(4,(sum) => {
      expect(sum).toBe(16).toBeA('number');
      done();
    });
  });
});
