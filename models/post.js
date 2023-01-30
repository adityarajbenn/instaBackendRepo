const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  device: {
    type: String,
    required: true,
    enum: ["PC", "TABLET", "MOBILE"],
  },
});

module.exports = mongoose.model("Post", postSchema);