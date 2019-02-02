const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const ctrl = require('./controller');

const app = express();
massive(process.env.CONNECTION_STRING)
  .then(dbResponse => {
    app.set('db', dbResponse);
  })
  .catch(err => {
    console.log(err);
  });
app.use(bodyParser.json());

app.get(`/api/houses`, ctrl.getHouses);
app.post(`/api/house`, ctrl.addHouse);
app.delete('/api/house/:id', ctrl.deleteHouse);
// app.delete(`/api/house/:id`, ctrl.deleteHouse);
const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => {
  console.log(`knock knock.. who's there? PORT:${SERVER_PORT}`);
});
