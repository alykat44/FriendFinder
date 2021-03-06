// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up express

var app = express();

PORT = process.env.PORT || 8080;



// Routes and images/Data Parsing

app.use(express.static("app/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "applicaton/vnd.api+json" }));



// API routing

require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);





// Listener

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});