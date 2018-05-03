var express = require('express');
var path = require('path');
var http = require('http');

var app = express();
var server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));

app.get('/', function (req, res) {
  res.render('index');
});

server.listen(3000, function () {
  console.log('Started listening at localhost:3000');
});

