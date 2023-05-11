const express = require("express")  ;
const https = require("https")

const app = express() ;

app.get("/", function(req,res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e11166873fa5b9137dea09cd24f7406b&units=metric"
    https.get(url, function(response){
        // console.log(response.statusCode)
        // console.log(response)

        response.on("data",function(data){
            const weatherData = JSON.parse(data)
            // console.log(weatherData)
            // console.log(data)

            const temp = weatherData.main.temp
            console.log(temp)
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon 
            const imageURL = "https://openweathermap.org/img/wn/"+icon+"@2x.png"


            res.write("<p>The weathre is currently " + weatherDescription + "</p>") 
            res.write("<h1>The Temperture in London is " + temp + "degree Celcius</h1>")
            res.write("<img src = "+imageURL+">")

            res.send() 
        })
    })

    //res.send("Server is up and running") 
    // we can only single res.send()  use in a app.get()  part so this is commenetd out
})


// Here we created our server
app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})