console.log("Starting App");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js")
const _ = require("lodash");

let result = notes.addNote();
console.log(_.isString("hello"));

// let user = os.userInfo();

// console.log(user);

// fs.appendFile('greetings.txt',`Hello ${user.username} you are ${notes.age}`);
