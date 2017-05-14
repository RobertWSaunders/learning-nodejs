const express = require("express");

let app = express();

app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
  // res.send('<h1>hello express!</h1>');
  res.send({
    name: "robert"
  });
});

app.listen(3000, () => {
  console.log("Server is up!")
});
