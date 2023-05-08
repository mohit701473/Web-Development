const express = require("express") 
const bodyParser = require("body-parser") 

const app = express() 
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname +"\\index.html")
})

app.post("/", function(req, res){
    //res.send("thanks for posting") 
    //console.log(req.body)
    //console.log(req.body.num1)
    var num1 = Number(req.body.num1) 
    var num2 = Number(req.body.num2)
    var result = num1 + num2 

    res.send("The result of the calculation is " + result)
}) 

app.listen(3000, function(){
    console.log("server is running on port 3000")
})