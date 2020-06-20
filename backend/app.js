var express=require('express');
var app=express();
var mongo=require('./config/database');
var port=process.env.PORT||3000;
var cors=require('cors');
app.use(cors());
app.use(express.json());

//database connection
mongoConnect();



//server
app.listen(3000,()=>{
    console.log('server started at '+port);
})