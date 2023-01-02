const express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("public/Home.html",{root:__dirname})
});

app.get("/hr",function(req,resp){
    resp.sendFile("public/hr.html",{root:__dirname})
});

app.listen(3000);
console.log("server is running on port number 3000");