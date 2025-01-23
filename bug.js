const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});