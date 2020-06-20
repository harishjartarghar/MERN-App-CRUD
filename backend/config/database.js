const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://harish:harish@cluster0-3hia8.gcp.mongodb.net/sample?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });

mongoConnect=()=>{
    client.connect(err => {
        console.log('mongodb connected');
    });
}