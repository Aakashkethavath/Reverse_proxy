const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer();

// Define target servers
const targets = {
  productService: 'http://localhost:5001',
  orderService: 'http://localhost:5002',
};

// Create the reverse proxy server
const server = http.createServer((req, res) => {
  if (req.url.startsWith('/product')) {
    proxy.web(req, res, { target: targets.productService }, (error) => {
      console.error('Error proxying to product service:', error.message);
      res.writeHead(502);
      res.end('Bad Gateway');
    });
  } else if (req.url.startsWith('/order')) {
    proxy.web(req, res, { target: targets.orderService }, (error) => {
      console.error('Error proxying to order service:', error.message);
      res.writeHead(502);
      res.end('Bad Gateway');
    });
  } else {
    res.writeHead(404);
    res.end('Route not found');
  }
});

// Start the proxy server
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Reverse proxy server running at http://localhost:${PORT}`);
});
