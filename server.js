// Dependencies
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

// Set up express

var app = express();
PORT = process.env.PORT || 4000;


// Sets up app for data parsing


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// Data Objects


// API Routes
app.get("/", function (req, res){
    res.sendfile(path.join(__dirname, "home.html"));
})

app.get("/", function (req, res){
    res.sendfile(path.join(__dirname, "survey.html"));
})
















// Listener

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})