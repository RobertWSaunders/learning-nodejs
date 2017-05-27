const { mongoose } = require('./../server/db/mongoose');
const { ObjectID } = require('mongodb');
const { Todo } = require('./../server/models/todo');

let id = 'someif';

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
})

// Todo.findOne
// Todo.findById
// ObjectID.isValid
