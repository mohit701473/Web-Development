const express = require("express")
const bodyParser = require("body-parser")

const app = express() 
app.use(bodyParser.urlencoded({extended: true}))

app.set('views', '')
app.set('view engine', 'ejs')


app.get("/", function(req, res){

    let today = new Date() 
    let currentDay = today. getDay()
    
    let options = {
        weekday: "long" ,
        day: "numeric" ,
        month: "long"
    }
    
    let day = today.toLocaleDateString("en-US", options) 

    res.render("list", {kindOfDay: day})
})

app.post("/", function(request, response){
    let item = request.body.newItem
    console.log(item)
})

app.listen(3000, function(){
    console.log("server is running on port 3000")
})