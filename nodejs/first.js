// Imports create server and localhost
const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;


// Creates a server that listens on port 3000 and responds with "Hello World!"
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});


// Starts the server and logs the URL to the console
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
