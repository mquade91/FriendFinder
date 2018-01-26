var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Creating an "express" server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// Sets up sthe Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTER
require("./App/routing/apiRoutes")(app);
require("./App/routing/htmlRoutes")(app);


//Listener
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);

});
