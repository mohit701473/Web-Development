const express = require("express")
const app = express() ;

app.get("/", function(req, res){
    res.send("<h1>Hello</h1>")
})

app.get("/contact", function(req, res){
    res.send("contact me at: mohit@gmail.com")
})

app.get("/about", function(req, res){
    res.send("about me")
})

app.get("/work", function(req, res){
    res.send("Here is my working profile")
})

app.listen(3000, function(){
    console.log("server started on port 3000") ;
}) ;