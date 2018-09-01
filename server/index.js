const express = require('express');
var parser = require('body-parser');
var path = require('path');
var db = require('../database/index.js');
var siteSearcher = require('./siteSearcher.js');

var app = express();
app.use(parser.json());

app.use(express.static(path.join(__dirname, '/../client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  res.append('Access-Control-Expose-Headers', 'x-frame-options');
  next();
});

app.get('/links', function(req, res) {
  db.fetch()
    .then((links) => {
      res.send(links);
    }).catch((err) => {
      res.sendStatus(500);
    });
});

app.post('/links', function(req, res) {
  console.log('POST: ' + JSON.stringify(req.body));
  siteSearcher.checkSiteTitle(req.body.url)
  .then((result) => {
    let linkForDb = Object.assign(result,req.body);
    db.save(linkForDb)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      })
  })
  .catch((err) => {
    console.log(err);
  });

});

app.put('/links', function(req, res) {
  console.log('PUT: ' + JSON.stringify(req.body));
  db.deleteLink(req.body)
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