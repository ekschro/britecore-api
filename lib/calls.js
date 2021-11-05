const { post } = require('axios');

const call = ({ url, api_key, defaults }) => o => post(url, { api_key, ...defaults, ...o }).then(({ data }) => data);

const callables = ({ endpoints: e, hostname, api_key }) => Object.keys(e).reduce((p, c) => ({
  ...p,
  [c]: call({
    ...e[c],
    url: `https://${hostname}${e[c].path}`,
    api_key
  })
}), {});

module.exports = { callables };