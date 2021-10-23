const mongoose = require("mongoose");
const user_model = require("./user_model");
const comment_model = require("./comment_model");
const postShema = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user_model" },
  title: { type: String, required: true },
  information: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  comments: [{ type: String, ref: comment_model }],
});

module.exports = mongoose.model("post_model", postShema);
