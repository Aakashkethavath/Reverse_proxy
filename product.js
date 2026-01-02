const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Product Service Response');
});

server.listen(5001, () => {
  console.log('Product Service running on port 5001');
});
