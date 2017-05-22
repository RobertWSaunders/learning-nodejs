const yargs = require('yargs');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Adress to fetch weather for.',
    string: true
  }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    weather.getWeather(results.latitude,results.longitude,(errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`In ${results.address}, it is ${weatherResults.temperature} degrees!`);
      }
    });
  }
});
