var express = require('express');
var mongoose = require('mongoose');
var app = express();
var Controls = require("./Controlls/Controls")
var DBURL = require('./Properties').DBURL;
var cors = require("cors")
var serveStatic = require('serve-static');
mongoose.connect(DBURL);


app.use(serveStatic("./Controlls/Controls"));
app.use(cors({
  origin: "*"
}))
app.use("/", Controls)

app.listen(5000, (req, res) => {
  console.log("server is running on port number 5000")
})
