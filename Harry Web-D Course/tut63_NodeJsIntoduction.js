const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calculator</title>
  </head>
  <body>
  
      <h1>Calculator</h1>
  
      <form action="/" method="post">
          <input type="text" name="num1" placeholder="First Number">
          <input type="text" name="num2" placeholder="Second Number">
          <button type="submit" name="submit">Calculator</button>
      </form>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});