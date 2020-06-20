const mongoose = require('mongoose');
const uri = "mongodb+srv://harish:harish@cluster0-3hia8.gcp.mongodb.net/sample?retryWrites=true&w=majority";


mongoConnect=()=>{
    mongoose
    .connect(
      uri,
      { useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify:false }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
}