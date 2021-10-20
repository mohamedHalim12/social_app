const mongoose = require("mongoose");
const user_model = require("./user_model");

const postShema = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  information: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post_model", postShema);
