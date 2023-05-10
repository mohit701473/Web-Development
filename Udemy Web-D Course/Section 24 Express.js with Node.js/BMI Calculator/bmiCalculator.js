const express = require("express")
const bodyParser = require("body-parser")

const app = express() 
app.use(bodyParser.urlencoded({extended: true}))

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "\\bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){
    var weight = Number(req.body.weight) 
    var height = Number(req.body.height)

    var result = Math.round((weight / (height * height)) * 100)

    res.send("Your BMI is " + result/100)
})

app.listen(3000, function(){
    console.log("Server is created on port 3000")
})