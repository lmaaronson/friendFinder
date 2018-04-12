//server is set up here
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var friends = require("./app/data/friends");
var app = express()    //straight from express website and included with anything


console.log("friends")
// var port = 8080;
var PORT = process.env.PORT || 8080;  
// what is the difference btw this and line 11

// app.use(express.static("./app/public/home"))    do this for survey too

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var myObject= {
// name: "Laurie",
// age: "49",
// color:"purple"
// }

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

//allows this "thing" to turn on to get "hello"
app.listen(PORT, function(){    
    console.log ("app is listening on http://localhost:8080")
})