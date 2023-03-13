// using Express
var express = require('express');

// create a variable called app app = express
var app = express();

// default path of hosting to the public folder
app.use(express.static(__dirname + '/public'));

// set port = 3000
var port = 3000;

app.listen(port);
console.log("Server listening on: "+port);