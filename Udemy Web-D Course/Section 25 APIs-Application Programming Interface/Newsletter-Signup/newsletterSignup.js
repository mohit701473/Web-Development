const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express() 

app.use(express.static("Public"))

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "//signup.html")
})

app.post("/", function(req, res){
    console.log(req.body.firstName)
    console.log(req.body.lastName)
    console.log(req.body.email)
    res.send("working")
})

// Server is set up on port 3000
app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})
