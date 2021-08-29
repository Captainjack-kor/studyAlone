import express from 'express';

const http = require("http");

const PORT = 8080;

const ip = "localhost";

const app = express()

app.use(cors());

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};

const server = http.createServer((request, response)=>{
  // console.log(req);
  // console.log(
  //   `http request method is ${request.method}, url is ${request.url}`
  // );
  // const cookie = response.getHeader('content-type');
  // console.log(cookie);
  if(request.method === "GET" && request.url === "/") {
    console.log("this is GET");
    //response.statusCode = 404;
    response.writeHead(200, defaultCorsHeader)
    response.end('hello mini-server sprints');
  }  else if(request.method === "POST" && request.url === "/lower") {
    let data = "";

    request.on('data', chunk => {
      data += chunk;
    })

    request.on('end', () => {
      //console.log(data);
      data = data.toLowerCase();
      response.writeHead(201, defaultCorsHeader);
      response.end(data);
    })
    
  } else if(request.method === "POST" && request.url === "/upper") {
    let data = "";

    request.on('data', chunk => {
      data += chunk;
    })

    request.on('end', () => {
      //console.log(data);
      data = data.toUpperCase();
      response.writeHead(201, defaultCorsHeader);
      response.end(data);
    })
  }
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

// console.log(server);