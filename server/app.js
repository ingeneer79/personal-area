// Requiring express in our server
const fs = require('fs');
const express = require('express');
var cors = require('cors')
const app = express();

const { env } = require('process');

const port = env.BACKEND_PORT ? env.BACKEND_PORT : 4000;

const readJson = async (name, res) => {
  const data = await fs.readFileSync(name, 'utf8');
  res.header("Content-Type",'application/json');
  res.send(data);
}

app.use(cors())

app.get('/ext-api/:name', function (req, res) {
  readJson(`./${req.params.name}.json`, res);
})

app.post('/keycloak-api/create-user', function (req, res) {
  
})



app.listen(port, function(req, res) {
  console.log(`Server is running at port ${port}`);
});