var express = require('express');
var favicon = require('express-favicon');
var path = require('path');

var app = express();

app.use(favicon('http://alphonso.tv/img/favicon.png'));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){ 
  res.sendFile(path.join(__dirname, 'index.html'));
});

var port = 3000;

app.listen(port, process.env.IP, function(){
    console.log('LISTENING');
});