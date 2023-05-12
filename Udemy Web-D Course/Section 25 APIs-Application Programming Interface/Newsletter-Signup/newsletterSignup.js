const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")

const app = express() 

app.use(express.static("Public"))

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "//signup.html")
})

app.post("/", function(req, res){
    const firstName = req.body.firstName  // console.log(req.body.firstName)
    const lastName = req.body.lastName   // console.log(req.body.lastName)
    const email = req.body.email        // console.log(req.body.email)
    
    // data that we are sending to mailchip's server
    const data = {
        members: [
            {
                email_address: email ,
                status: "subscribed" ,
                merge_fields: {
                    FNAME: firstName ,
                    LNAME: lastName
                }
            }
        ]
    };

    // jsonData bcz we send JSON data to Mailchimp's server
    const jsonData = JSON.stringify(data)
    
    const url = 'https://us13.api.mailchimp.com/3.0/lists/741c3641d3'
    
    const options = {
        method: "POST" ,
        auth: "mohit7014:2df150cd3d4ee74c7f325aeb307888c4-us13"
    }

    const request = https.request(url, options, function(response){
       
        if (response.statusCode === 200){
            res.sendFile(__dirname + "//success.html")
        }
        else{
            res.sendFile(__dirname + "//failure.html")
        }

        response.on("data", function(data){
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end() 
     
})


// post request to handle the failure page
app.post("/failure", function(req, res){
    res.redirect("/")
})

// Server is set up on port 3000
app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000.")
}) // process.env.PORT || 3000  by this our server is run both localy and heroku server  and process.env.PORT this will decide the PORT for heroku to run these files




// API key  mailchimp 
// 2df150cd3d4ee74c7f325aeb307888c4-us13

// Unique id for audience Mohit
// This your audience ID or also known as List ID , and that is going to help Mailchimp identify the list that you want to put youe subscribers into
//741c3641d3