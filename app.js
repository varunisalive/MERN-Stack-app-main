const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const apiRoutes = require("./routes/api");

mongoose.connect("mongodb://localhost:27017/appDB", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
  console.log("Mongoose is connected");
});


const data = {
  title: "Welcome to my world",
  body: "I like wasting my time."
}

// const newBlogPost = new BlogPost(data);
// newBlogPost.save((err) => {
//   if(err){
//     console.log("Error detected!");
//   } else {
//     console.log("Data added to DB successfully");
//   }
// });

app.use(morgan('tiny'));

//Routes
app.use("/", apiRoutes);

const port = process.env.PORT || 8080;

app.listen(port, function(req, res){
  console.log('The Server is ready at port');
});
