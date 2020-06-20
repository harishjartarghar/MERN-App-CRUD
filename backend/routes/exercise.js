var express=require('express');
var app = express();
var Exercise=require('../models/exerciseSchema');



app.get('/',(req,res)=>{
    Exercise.find()
    .then(exercise=>res.json(exercise))
    .catch(err=>res.status(400).json('Error '+err));
});


app.post('/add',(req,res)=>{
    const username=req.body.username;
    const description=req.body.description;
    const duration=Number(req.body.duration);
    const date=Date.parse(req.body.date);
    const newExercise=new Exercise({username,description,duration,date});

    newExercise.save()
    .then(()=>res.json('Exercise added!'))
    .catch(err=>res.status(400).json('Error '+err));
});

app.get('/:id',(req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=>res.json(exercise))
    .catch(err=>res.status(400).json('Error '+err));
});

app.delete('/:id',(req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json('exercise deleted'))
    .catch(err=>res.status(400).json('Error '+err));
});


app.post('/update/:id',(req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=>{
     exercise.username=req.body.username;
     exercise.description=req.body.description;
     exercise.duration=Number(req.body.duration);
     exercise.date=Date.parse(req.body.date);
     
     exercise.save()
     .then(()=>res.json('Exercise updated!'))
     .catch(err=>res.status(400).json('Error '+err));
    })
    .catch(err=>res.status(400).json('Error '+err));
});

module.exports=app;