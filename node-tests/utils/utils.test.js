const utils = require('./utils');
//assertion library
const expect = require('expect');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(4);
  expect(res).toBe(16).toBeA('number');
})

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
