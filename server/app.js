// Requiring express in our server
const express = require('express');
var cors = require('cors')
const app = express();

const classifiersData = require('./classifiers.json');
const waybillsData = require('./waybills.json');
const catalogData = require('./catalog.json');
const profileData = require('./profile.json');

const { env } = require('process');

const port = env.BACKEND_PORT ? env.BACKEND_PORT : 4000;

app.use(cors())

app.get('/ext-api/classifiers', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(classifiersData));
})

app.get('/ext-api/waybills', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(waybillsData));
})


app.get('/ext-api/catalog', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(catalogData));
})

app.get('/ext-api/profile', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(profileData));
})

app.listen(port, function(req, res) {
  console.log(`Server is running at port ${port}`);
});