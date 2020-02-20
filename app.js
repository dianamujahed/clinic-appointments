var MongoClient = require('mongodb').MongoClient;
const bodyParser= require('body-parser')
var express = require('express');

var url = "mongodb://localhost:27017/";
var app = express();

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("clinic");
  var myobj = { name: "diana mujahed", address: "Highway 37" ,"starting date": "30/10/2018","phone number": "0599882058","email": "dianamujahed@gmail.com"};
  dbo.collection("doctor").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
});


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
// app.use(express.static('/public'));

app.get('/', function(req, res) {
    res.render('home',{title:"clinic"});
});
app.post('/', (req, res) => {
  console.log(req.body)
})
app.listen(3000);
