const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: Date.now()
  }
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;
