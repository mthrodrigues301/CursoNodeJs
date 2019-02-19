/* import express module  */
var express = require('express');

/*import consign module */
var consign = require('consing');

/* import bodyparser module */
var bodyParser = require('body-parser');

/* import express-validator module */
var expressValidator = require('express-validator');

/* start express object */
var app = express();

/* set view engine and view express module */
app.set('view engine', 'ejs');
app.set('views', '.app/views');

/* config middlewares express.static*/
app.use(express.static('.app/public'));

app.use(bodyParser.urlencoded({extended: true});

app.use(expressValidator());

consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app);

/* app object export */
module.exports = app;