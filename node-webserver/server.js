const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
let app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use((req, res, next) => {
  res.render('maintenance.hbs');
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`;
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to the server.log!');
    }
  });
  next();
});



hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
app.get("/", (req, res) => {
  // res.send('<h1>hello express!</h1>');
  res.send({
    name: "robert"
  });
});

app.get("/about", (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.listen(3000, () => {
  console.log("Server is up!")
});
