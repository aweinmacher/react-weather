var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));






app.listen('3001', function() {
    console.log("what do you want from me! get me on 3001 ;-)");
  });