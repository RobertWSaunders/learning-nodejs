const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Adress to fetch weather for.',
    string: true
  }
}).help().alias('help', 'h').argv;

let encodedAddress = encodeURIComponent(argv.a);
let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;


axios.get(geocodeURL).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find address!');
  }
  const API_KEY = '8233ef70106ff6b43dfa5db010ddbad5';
  let lat = response.data.results[0].geometry.location.lat;
  let long = response.data.results[0].geometry.location.lng;
  let weatherURL = `https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherURL);
}).then((response) => {
  var temp = response.data.currently.temperature;
  var atemp = response.data.currently.apparentTemperature;
  console.log(`It's currently ${atemp}`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API Servers!');
  } else {
    console.log(e.message);
  }
});
