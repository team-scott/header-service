const express = require('express');
const port = process.env.PORT || 3002;
const sqlite = require('sqlite3').verbose();
const path = require('path');
const app = express();
const db = require('../database/');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get(`/`, (req, res) => {
  console.log()
  db.get((err) => {
    if (err) {
      console.log(error);
    }
  });
  res.send('').status(200);
});

app.listen(port, (err) => {
  if(err) {
    console.log(err);
  }
  console.log(`listening on port ${port}!`);
});