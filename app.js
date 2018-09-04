const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var x = 1;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Q-Box Hello World number ${x}\n`);
  x=x+1;
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
