const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');
  } else if (req.url === '/men') {
    const menProducts = [
      { name: 'Product 1', category: 'Men' },
      { name: 'Product 2', category: 'Men' },
      // Add more products here
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    const womenProducts = [
      { name: 'Product 1', category: 'Women' },
      { name: 'Product 2', category: 'Women' },
      // Add more products here
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(womenProducts));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
