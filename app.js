var http = require('http');
http.createServer(function (req, res) {
  var newVariable // this will FAIL travis ci lint because ';' is missing.
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n');
}).listen(9999, '127.0.0.1');
console.log('Server running at http://127.0.0.1:9999/');
