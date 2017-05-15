const express = require("express");
const hbs = require("hbs");

let app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

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
