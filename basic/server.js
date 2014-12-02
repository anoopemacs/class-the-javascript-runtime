var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
  var url = req.url

  console.log(req.method + ' ' + req.url);

  switch (req.url) {
    case '/':
      res.setHeader('Content-Type', 'text/html');
      res.end(fs.readFileSync('app.html', 'utf8') + '\n');
      return;
    case '/app.js':
      res.setHeader('Content-Type', 'application/javascript');
      res.end(fs.readFileSync('app.js', 'utf8') + '\n');
      return;
    default:
      res.writeHead(404, 'Page not found.');
      res.end();
      return;
  }
}).listen(3000);

console.log('Listening on http://localhost:3000');
