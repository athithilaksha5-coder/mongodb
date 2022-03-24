const express=require('express');
const bodyParser=require('body-parser');
var mongoose = require('mongoose');
const app=express();
const router = require('./routers/productrouter');
const customer = require('./routers/customerrouter');

mongoose.connect('mongodb://localhost:27017/LAKSHMISTORE',{ useNewUrlParser: true }, function (err) {
    if (!err) {
        console.log("db connected")

    }
    else {
        console.log('db error')
    }
});
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));

// Parses the text as json
app.use(bodyParser.json());
app.use('/LAKSHMISTORE',router);
app.use('/LAKSHMISTORE/CUSTOMER',customer);


app.listen(6565);


   



  
