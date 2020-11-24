const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

mongoose.connect("mongodb://localhost:27017/appDB", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
  console.log("Mongoose is connected");
});

app.use(morgan('tiny'));

app.get("/api", function(req, res){
  const data = {
    username:"idkman",
    age: 9
  };
  res.json(data);
});

app.get("/api/name", function(req, res){
  const data = {
    username: "idkagain",
    age: 10
  };
  res.json(data);
});

const port = process.env.PORT || 8080;

app.listen(port, function(req, res){
  console.log('The Server is ready at port');
});
