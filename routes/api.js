const express = require("express");
const router = express.Router();
const BlogPost = require("../models/blogPost");


router.get("/api", function(req, res){

  BlogPost.find({})
    .then((data) => {
      console.log("data:",data);
      res.json(data);
    })
    .catch((err) => {
      console.log("error: ", err);
    });
});

router.get("/api/name", function(req, res){
  const data = {
    username: "idkagain",
    age: 10
  };
  res.json(data);
});

module.exports = router;
