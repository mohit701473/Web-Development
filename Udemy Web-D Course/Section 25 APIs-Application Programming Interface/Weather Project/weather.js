const express = require("express")  ;
const https = require("https")

const app = express() ;

app.get("/", function(req,res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e11166873fa5b9137dea09cd24f7406b&uint=metric"
    https.get(url, function(response){
        console.log(response.statusCode)

        response.on("data",function(data){
            const weatherData = JSON.parse(data)
            console.log(weatherData)
            //console.log(data)

            const temp = weatherData.main.temp
            console.log(temp)
            const weatherDescription = weatherData.weather[0].description
            console.log(weatherDescription)

        })
    })

    res.send("Server is up and running") 
})


// Here we created our server
app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})