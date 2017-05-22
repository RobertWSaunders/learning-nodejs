const { MongoClient, ObjectID }  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to conenct to MondoDB server!');
  }
  console.log('Connected to MongoDB server!');

  // db.collection('Todos').insertOne({
  //   text: "finish this course",
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo!', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // insert new doc into Users (name, age, location)

  db.collection('Users').insertOne({
    name: 'Robert Saunders',
    age: 19,
    location: 'Toronto, Ontario'
  }, (err, result) => {
    if (err) {
      return console.log('Could not insert user into the user collection!')
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  

  db.close();
});
