// const express = require("express") 
// const bodyParser = require("body-parser") 
// const fs = require('fs')
// const https = require('https');
// const app = express() 
// app.use(bodyParser.urlencoded({extended: true}))

// const options = {
//     key: fs.readFileSync('./server.key'), // Replace with your key path
//     cert: fs.readFileSync('./server.crt'), // Replace with your certificate path
// };

// const server = https.createServer(options, app);

// app.get("/", function(req, res){
//     res.sendFile(__dirname +"\\index.html")
// })

// app.post("/", function(req, res){
//     //res.send("thanks for posting") 
//     //console.log(req.body)
//     //console.log(req.body.num1)
//     var num1 = Number(req.body.num1) 
//     var num2 = Number(req.body.num2)
//     console.log("num1 is: ", num1);
//     console.log("num2 is: ", num2);
//     var result = num1 + num2 

//     res.send("The result of the calculation is " + result)
// }) 

// server.listen(3000, function(){
//     console.log("server is running on port 3000")
// })

// const app = require('express')();
// const https = require('https');
// const fs = require('fs');

// const options = {
//     key: fs.readFileSync('./server.key'), // replace it with your key path
//     cert: fs.readFileSync('./server.crt'), // replace it with your certificate path
// }

// app.get("/", function(req, res){
//     res.sendFile(__dirname +"\\index.html")
// })


// app.post("/", function(req, res){
//     //res.send("thanks for posting") 
//     //console.log(req.body)
//     //console.log(req.body.num1)
//     var num1 = Number(req.body.num1) 
//     var num2 = Number(req.body.num2)
//     console.log("num1 is: ", num1);
//     console.log("num2 is: ", num2);
//     var result = num1 + num2 

//     res.send("The result of the calculation is " + result)
// }) 

// https.createServer(options, (req, res) => {
//   res.writeHead(200);
//   res.end('Hello, HTTPS World!');
//   console.log(req)
// }).listen(443, () => {
//   console.log('Server is running on port 443');
// });


const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5050;

const options = {
    key: fs.readFileSync('./server.key'), // replace it with your key path
    cert: fs.readFileSync('./server.crt'), // replace it with your certificate path
};

const server = https.createServer(options, app);

// app.use((req, res, next) => {
//     const chunks = [];
//     req.on('data', chunk => {
//         chunks.push(chunk);
//     });
//     req.on('end', () => {
//         const encryptedData = Buffer.concat(chunks);
//         console.log('Encrypted request data:', encryptedData.toString('hex'));
//         next();
//     });
// });

app.get("/", function(req, res){
    res.sendFile(__dirname + "\\index.html");
});

app.post("/", function(req, res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    console.log("num1 is: ", num1);
    console.log("num2 is: ", num2);
    var result = num1 + num2;
    //res.send("The result of the calculation is ");
});



server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
