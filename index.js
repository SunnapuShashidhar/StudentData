var express = require('express');
var mongoose = require('mongoose');
var app = express();
var Controls = require("./Controlls/Controls")
var DBURL = require('./Properties').DBURL;
var cors = require("cors")
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect(DBURL);



app.use(cors({
  origin: "*"
}))
app.use("/", Controls)

app.listen(5000, (req, res) => {
  console.log("server is running on port number 5000")
})
