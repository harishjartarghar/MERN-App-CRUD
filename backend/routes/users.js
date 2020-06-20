var express=require('express').Router;
var app=express();
var User=require('../models/userModel');



app.get('/',(req,res)=>{
    User.find()
    .then(users=>res.send(users))
    .catch(err=>res.status(400).json('Error '+err));
});


app.post('/add',(req,res)=>{
    const username=req.body.username;
    const user=new User({username});

    user.save()
    .then(()=>res.json('user added!'))
    .catch(err=>res.status(400).json('Error '+err));
})


module.exports=app;