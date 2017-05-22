const { MongoClient, ObjectID }  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to conenct to MondoDB server!');
  }
  console.log('Connected to MongoDB server!');

  db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch docs!', err);
  });


  db.close();
});
