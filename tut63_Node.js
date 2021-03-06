// console.log("Helllo World");
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pseudo selectors and more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: #fff;;
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:hover{
              color: rgb(187, 2, 2);
              background-color: rgb(255, 249, 213);
          }
          a:visited{
              background-color: rgb(72, 255, 0);
          }
          a:active{
              background-color: blue;
          }
          .btn{
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-weight: bold;
              background-color: crimson;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          .btn:hover{
              color: rgb(187, 2, 2);
              background-color: rgb(255, 249, 213);
              border: 2px solid black;
          }
          .btn:visited{
              background-color: rgb(72, 255, 0);
          }
          .btn:active{
              background-color: blue;
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is heading one</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt possimus error iure praesentium dignissimos, excepturi ratione cupiditate culpa nisi, deserunt optio, odio aperiam. Optio adipisci error laborum excepturi ipsa voluptate vero nam voluptates.</p>
          <a href="https://google.com" class="btn">Read more</a>
          <button class="btn">Contact Us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});