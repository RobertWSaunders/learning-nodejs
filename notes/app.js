console.log("Starting App");

const fs = require("fs");
const os = require("os");

let user = os.userInfo();

console.log(user);

fs.appendFile('greetings.txt',`Hello ${user.username}`);