const API_KEY = '8233ef70106ff6b43dfa5db010ddbad5';
const request = require('request');

function getWeather(lat, long, callback) {
  request({
    url: `https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
    else {
      callback('Bad Error');
    }
  });
}

module.exports.getWeather = getWeather;
