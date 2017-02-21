var express = require('express');
var bodyParser = require('body-parser');
var exec = require('child_process').exec ;
var fs = require('fs');
var connect = require('connect');
var app = express()

app.use(express.static(__dirname));
//( + '/public')
app.use(bodyParser.urlencoded());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
	console.log("express")
  res.sendFile(__dirname, "/index.html");
})


app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
