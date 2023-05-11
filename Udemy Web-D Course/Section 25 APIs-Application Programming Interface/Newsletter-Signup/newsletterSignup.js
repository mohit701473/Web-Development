const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express() 

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.send("Server is set up")
})

// Server is set up on port 3000
app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})
