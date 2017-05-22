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
