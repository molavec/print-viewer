var pug = require('pug');
var merge = require('merge');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

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
  res.send('wellcome to <b>print-viewer</b> service');
});

//test template
app.post('/test', function (req, res) {
  //get request data
  var locals = req.body;
  //print request data
  console.log(locals);
  // In this case, I use 'renderFile()' to convert to html inmediatly.
  // In next routes I prefer to use 'compileFile'.
  var html = pug.renderFile('templates/test.pug', merge(options, locals));
  // reply html
  res.send(html);
});

//** Example
app.get('/A4', function (req, res) {
  var renderTemplate = pug.compileFile('templates/A4.pug', options);
  var html = renderTemplate(req.body);
  res.send(html);
});

//** A litle more Complex example. Use it or modify it for your work!!. **
app.post('/A4', function (req, res) {
  // renderFile
  var renderTemplate = pug.compileFile('templates/A4.pug', options);
  console.log(req.body);
  var html = renderTemplate(req.body);
  res.send(html);
});

//up server!!
app.listen(port, function () {
  console.log('\'print-preview\' app listening on port '+port+'!');
});
