const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req,res){
    
    let operation = req.body.op;
    let fNumber = Number(req.body.fNumber);
    let sNumber = Number(req.body.sNumber);
    let result = 0;

    switch(operation){
        case "add":
            result = fNumber + sNumber;
            break;
        case "substract":
            result = fNumber - sNumber;
            break;
        case "multiply":
            result = fNumber * sNumber;
            break;
        case "divide":
            result = fNumber / sNumber;
            break;
        default:
            break;
    }


    res.write("Result is "+ result)
    res.send()
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started");
})