const endpoints = require('./lib/endpoints');
const { callables } = require('./lib/calls');

module.exports = ({ api_key, hostname }) => callables({ endpoints, api_key, hostname });