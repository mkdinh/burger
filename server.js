// ------------------ Module Exports ---------------------------
var express = require('express');
var hdbs = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var burgers_controller = require('./controllers/burgers_controller.js');
var api_controller = require('./controllers/api_controller.js');

// ------------------ SETTING UP SERVER ---------------------------

// create express app
var app = express();
var port = process.env.PORT || 8080;
app.listen(port, function(){console.log('Listen on port:', port)})

// set view engine to handelbars
app.engine('handlebars', hdbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

// serve static files to server (css, js, img)
app.use( express.static(path.join(__dirname,'public')) );
// parse body of incoming request
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());
// allow overriding methods in query (?_method=put)
app.use(methodOverride('_method'));

// set up controller for api
app.use('/api/',api_controller)
// set up controller for burgers
app.use('/',burgers_controller)






