const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Order Service Response');
});

server.listen(5002, () => {
  console.log('Order Service running on port 5002');
});
