const express = require('express');
var parser = require('body-parser');
var path = require('path');
var db = require('../database/index.js');

var app = express();
app.use(parser.json());

app.use(express.static(path.join(__dirname, '/../client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

app.get('/links', function(req, res) {
  db.fetch()
    .then((links) => {
      res.send(links);
    }).catch((err) => {
      res.sendStatus(500);
    });
});

app.post('/links', function(req, res) {
  console.log(req.body);
  db.save(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
});

app.listen(process.env.PORT || 3001);
console.log('Listening on 3001!');