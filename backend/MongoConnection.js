const express =require('express');
const bodyparser=require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:q9twDpjE06O9oTxd@cluster0-uz0v7.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true }, { useNewUrlParser: true });
const app = express();
const port = 8300;
const cors=require('cors');
app.use(bodyparser.urlencoded({encoded:false}))
app.use(bodyparser.json());
client.connect(err => {
const col = client.db("CarApp").collection('UserAndCarInfo');
console.log("connect");
if (err)
return console.log(err);




app.use(cors());
require('./rout')(app, col);
app.listen(port, () => {
console.log("Port 8300 running on browser...");
});
});

// app.post('/',(req,res)=>{
//     console.log(req.body.Username)
// })


