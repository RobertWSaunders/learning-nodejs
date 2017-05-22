const { MongoClient, ObjectID }  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to conenct to MondoDB server!');
  }
  console.log('Connected to MongoDB server!');

  // deleteMany
  db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    console.log(result);
  });

  db.close();
});
