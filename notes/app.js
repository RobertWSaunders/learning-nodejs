console.log("Starting App");

const fs = require("fs");

const notes = require("./notes.js")
const _ = require("lodash");

var command = process.argv[2];
console.log(process.argv);
