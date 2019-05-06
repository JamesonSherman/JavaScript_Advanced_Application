const http = require('http');
const fetch = require('node-fetch');
const querystring = require('querystring');
const port = 5000;

const server = http.createServer((request, response) => {
  const URL = request.url;
  const parsedURL = querystring.parse(URL.replace(/^.*\?/, ''));

  async function git(username) {
    console.log(username);
    const result = await fetch(
      `https://api.github.com/users/${username}/repos?type=all&sort=updated`,
    );
    const repos = await result.json();
    const final = repos;

    console.log(final);
    return { objects: final };
  }

  git(parsedURL.username).then(responseData => {
    console.log(`inside git`);
    console.log(responseData);
    // eslint-disable-next-line no-new-object
    const objdata = new Object(responseData);
    const psuedo = {
      'Content-Type': 'application/json; charset=utf-8',
      Status: '200 OK',
      'cache-control': 'public, max-age=60, s-maxage=60',
    };
    console.log('writing head');
    response.writeHead(200, 'OK', { 'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'});
    console.log('writing body');
    response.write(JSON.stringify(objdata.objects));
    response.end();
  });
});

module.exports = {
  startserver() {
    console.log('listening on port 5000');
    server.listen(port);
  },
};
