// Requiring express in our server
const express = require('express');
const app = express();

const data = require('./classifiers.json');
const { env } = require('process');

const port = env.BACKEND_PORT ?? 4000;

app.get('/api/classifiers', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})

app.listen(port, function(req, res) {
  console.log("Server is running at port 3000");
});