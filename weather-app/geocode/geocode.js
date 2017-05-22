const request = require('request');

function geocodeAddress(address, callback) {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Error!');
    }
    else if(body.status === 'ZERO_RESULTS'){
      callback('No locations found for address!');
    }
    else if(body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}


module.exports = {
  geocodeAddress
};
