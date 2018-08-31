const express = require('express');
var parser = require('body-parser');
var path = require('path');

var app = express();
app.use(parser.json());


console.log(path.join(__dirname, '/../node_modules'));
app.use(express.static(path.join(__dirname, '/../client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

app.listen(3001);
console.log('Listening on 3001!');