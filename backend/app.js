var express=require('express');
var app=express();
var mongo=require('./config/database');
var port=process.env.PORT||3000;
var cors=require('cors');
app.use(cors());
app.use(express.json());

//database connection
mongoConnect();

var userRoutes=require('./routes/users');
var exerciseRoutes=require('./routes/exercise');

app.get('/',(req,res)=>
{
    res.send('done');
});
app.use('/users',userRoutes);
app.use('/exercise',exerciseRoutes);

//server
app.listen(port,()=>{
    console.log('server started at '+port);
});