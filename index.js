const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const fs = require('fs');
const json = require('./file.json');
const User = require("./user");


const port = 3000

const app = express()

mongoose.connect("mongodb://localhost:27017/flutterwave",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }).then(() => {
    console.log('Database Connected Successfully');
  }).catch((err) => {
    console.log('error in connecting database', err);
  });
  

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());


const getuser = async(req, res) =>{
    res.status(200).json({
        message: "My Rule-Validation API",
        status: "Success",
        data: json
    })
}

app.get("/", getuser);

const rule = async (req, res, next) => {
    try {

    const {data, rule}= req.body

    
    const user = new User({data, rule});

    
    
    res.status(200).json({
        message: "field validate",
        status: "Success",
        data: {user}
    })
    console.log(user)   
    } catch (error) {
        next(error)
    }
   
}

app.post("/validate", rule);




app.listen(port, () => {
    console.log("App Running on Port 3000  ")
})



