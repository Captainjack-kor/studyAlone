//import express from 'express';
const dotenv = require('dotenv');

const express = require('express');
//const http = require("http");
const cors = require('cors');
//const PORT = 8080;

dotenv.config();
// require('dotenv').config()
const ip = process.env.APP_IP;
const app = express();

var bodyParser = require('body-parser')

let count = [0,0,0];
app.use(bodyParser.json())
app.use(cors());

app.get('/1', function (req,res) {
  // console.log(res);
  count[0]++;
  console.log(count);
  res.send(String(count[0]));
});

app.get('/2', function (req,res) {
  // console.log(res);
  count[1]++;
  console.log(count);
  res.send(String(count[1]));
});

app.get('/3', function (req,res) {
  // console.log(res);
  count[2]++;
  console.log(count);
  res.send(String(count[2]));
});

app.post('/test', function (req,res) {
  // console.log(res);
  // console.log(count);

  console.log("ID: " + req.body.username);
  console.log("PW: " + req.body.password);
  console.log("login!!!");
  res.send("login TEST");
});


app.post('/lower', (req, res) => {
  //console.log(req.body);
  let result = "";
  result = req.body.data;
  console.log(result);
  result = result.toLowerCase();
  console.log(result);
  res.send(result);
})

app.post('/upper', (req, res) => {
  //console.log(req.body);
  let result = "";
  result = req.body.data;
  console.log(result);
  result = result.toUpperCase();
  console.log(result);
  res.send(result);
})
app.listen(8080);

// const defaultCorsHeader = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Accept',
//   'Access-Control-Max-Age': 10
// };

/*
const server = http.createServer((request, response)=>{
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
*/

// server.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });

// console.log(server);