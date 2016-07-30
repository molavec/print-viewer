var pug = require('pug');
var merge = require('merge');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var TEMPLATE_FOLDER = 'print_templates'
  , STD_PUG_FILENAME = 'index.pug'
  , STD_CSS_FILENAME = 'style.css'
  , STD_JSON_FILENAME = 'example.json'
  ;

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
app.use(express.static('print_templates'));

//Main wellcome to service
app.get('/', function (req, res) {
  var html = pug.renderFile('templates/index.pug', options);
  res.send(html);
});


// Idea inspired by Alexander Zeitler
// https://alexanderzeitler.com/articles/expressjs-dynamic-runtime-routing/
app.get('/:dynamicroute/:showexample', function (req, res) {

  //it gets dynamic route
  var templateName = req.params.dynamicroute;

  var renderHeadTemplate = pug.compile(
      'doctype html\n'
    + 'html\n'
    + ' head\n'
    + '   link(rel="stylesheet", href="' + STD_CSS_FILENAME + '")\n'
    + '   title #{pageTitle}\n'
    ,options
    );

  //it compiles Jade File based on dynamic route
  var renderBodyTemplate = pug.compileFile(
                              TEMPLATE_FOLDER + '/'
                            + templateName + '/'
                            + STD_PUG_FILENAME
                            , options
                            );


  var html;
  //if activates example mode
  if(req.params.showexample === '1'){
    var jsonExample = require(
                                './'
                              + TEMPLATE_FOLDER + '/'
                              + templateName + '/'
                              + STD_JSON_FILENAME
                            );
    html = renderHeadTemplate() + renderBodyTemplate(jsonExample);
  //if data json object is empty
  } else if(Object.keys(req.body).length === 0 && req.body.constructor === Object){
    html = '<h1>Faltan contenido para generar template</h1>';
  //render template
  }else{
    html = renderTemplate(req.body);
  }
  //response to client
  res.send(html);

});


//up server!!
app.listen(port, function () {
  console.log('\'print-preview\' app listening on port '+port+'!');
});
