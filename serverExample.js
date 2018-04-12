
// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
// var path = require('path');
// var htmlRoutes = require('./app/routing/html-routes');
// var apiRoutes = require('./app/routing/api-routes');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// from the resturant server.js app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
// app.use('/', htmlRoutes);
// app.use('/survey', htmlRoutes);
// app.get('/api/friends', apiRoutes);
// app.post('/api/friends', apiRoutes);
require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)


// Starts the server to begin listening
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});