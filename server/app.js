// Requiring express in our server
const express = require('express');
var cors = require('cors')
const app = express();

const data = require('./classifiers.json');
const catalog = require('./catalog.json');

const { env } = require('process');

const port = env.BACKEND_PORT ?? 4000;

app.use(cors())

app.get('/ext-api/classifiers', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})

app.get('/ext-api/catalog', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(catalog));
})

app.listen(port, function(req, res) {
  console.log(`Server is running at port ${port}`);
});