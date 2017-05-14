const fs  = require('fs');

var obj = {
  name: "Andrew"
};

var stringOBJ = JSON.stringify(obj);
console.log(typeof stringOBJ);
console.log(stringOBJ);

var personString = '{"name":"Andrew"}';
var personOBJ = JSON.parse(personString);
console.log(typeof personOBJ);
console.log(personOBJ);


var originalNote = {
  title: 'Some title',
  body: 'some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(note);
