const mongoose = require("mongoose");

const postShema = mongoose.Schema({
  title: { type: String, required: true },
  information: { type: String, required: true },
});

module.exports = mongoose.model("post_model", postShema);
