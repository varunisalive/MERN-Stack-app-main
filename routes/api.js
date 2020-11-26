const express = require("express");
const router = express.Router();
const BlogPost = require("../models/blogPost");


router.get("/", function(req, res){

  BlogPost.find({})
    .then((data) => {
      console.log("data:",data);
      res.json(data);
    })
    .catch((err) => {
      console.log("error: ", err);
    });
});

router.get("/name", function(req, res){
  const data = {
    username: "idkagain",
    age: 10
  };
  res.json(data);
});

router.post("/save", function(req, res){
  console.log("Body: ", req.body);
  const data = req.body;

  const newBlogPost = new BlogPost(data);

  newBlogPost.save((err) => {
    if(err){
      console.log('Internal Server error detected');
    } else {
      console.log("Your data has been saved");
    }
  });

  res.json({
    msg: "Server: We received the data!"
  });
});

module.exports = router;
