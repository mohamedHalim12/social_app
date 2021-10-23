const mongoose = require("mongoose");
const reaction_model = require("./reaction_model");

const commentShema = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, required: true },
  comment: { type: "String", required: true },
  date: Date,
  reaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: reaction_model,
  },
});

module.exports = mongoose.model("comment_model", commentShema);
