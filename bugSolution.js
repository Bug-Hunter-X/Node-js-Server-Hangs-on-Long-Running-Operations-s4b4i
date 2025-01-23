const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running operation asynchronously
  await new Promise(resolve => {
    setTimeout(resolve, 1000); //Simulate long running task
  });
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});