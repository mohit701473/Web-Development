const express = require("express")  
const https = require("https")
const bodyParser = require("body-parser")

const app = express() ;

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    
    res.sendFile(__dirname + "//weather.html") 
})

app.post("/", function(req, res){
    console.log(req.body.cityName)
    console.log("post request recived")

    const query = req.body.cityName
    const apiKey = "e11166873fa5b9137dea09cd24f7406b"
    const unit = "metric"

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit

    https.get(url, function(response){
        // console.log(response.statusCode)
        // console.log(response)

        response.on("data",function(data){

            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon 
            const imageURL = "https://openweathermap.org/img/wn/"+icon+"@2x.png"


            res.write("<p>The weathre is currently " + weatherDescription + "</p>") 
            res.write("<h1>The Temperture in " + query +" is " + temp + "degree Celcius</h1>")
            res.write("<img src = "+imageURL+">")

            res.send() 
        })
    })
})



// Here we created our server
app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})
