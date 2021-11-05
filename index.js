const endpoints = require('endpoints');
const { callables } = require('calls');

module.exports = ({ api_key, hostname }) => callables({ endpoints, api_key, hostname });