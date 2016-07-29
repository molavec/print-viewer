var pug = require('pug');
var merge = require('merge');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var jsonA4Example = require('./json/A4_example.json');
var jsonPrescriptionA4Example = require('./json/prescription_A4_example.json');

/************
pug options
*************/
var options = {
  filename: "pug.log",
  pretty: true
};

/************
Express configurations
*************/
var port = 3000;

// parse application/json
app.use(bodyParser.json());

//statics files
app.use(express.static('public'));

//Main wellcome to service
app.get('/', function (req, res) {
  var html = pug.renderFile('templates/index.pug', options);
  res.send(html);
});

// ---> A4 example <---
app.get('/A4', function (req, res) {
  var renderTemplate = pug.compileFile('templates/A4.pug', options);
  var html;
  if(Object.keys(req.body).length === 0 && req.body.constructor === Object){
    html = renderTemplate(jsonA4Example);
  }else{
    html = renderTemplate(req.body);
  }
  res.send(html);
});

//** A litle more Complex example. Use it or modify it for your work!!. **
app.post('/A4', function (req, res) {
  // renderFile
  var renderTemplate = pug.compileFile('templates/A4.pug', options);
  var html;
  if(Object.keys(req.body).length === 0 && req.body.constructor === Object){
    html = renderTemplate(jsonA4Example);
  }else{
    html = renderTemplate(req.body);
  }
  res.send(html);
});

// ---> A4 prescription <---
app.get('/prescription_A4', function (req, res) {
  var renderTemplate = pug.compileFile('templates/medical/prescription_A4.pug', options);
  var html;
  if(Object.keys(req.body).length === 0 && req.body.constructor === Object){
    html = renderTemplate(jsonPrescriptionA4Example);
  }else{
    html = renderTemplate(req.body);
  }
  res.send(html);
});

//** A litle more Complex example. Use it or modify it for your work!!. **
app.post('/prescription_A4', function (req, res) {
  // renderFile
  var renderTemplate = pug.compileFile('templates/medical/prescription_A4.pug', options);
  var html;
  if(Object.keys(req.body).length === 0 && req.body.constructor === Object){
    html = renderTemplate(jsonPrescriptionA4Example);
  }else{
    html = renderTemplate(req.body);
  }
  res.send(html);
});



//up server!!
app.listen(port, function () {
  console.log('\'print-preview\' app listening on port '+port+'!');
});
