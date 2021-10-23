const mongoose = require("mongoose");
const comment_model = require("./comment_model");
const post_model = require("./post_model");
const uniqueValidator = require("mongoose-unique-validator");

const userShema = mongoose.Schema({
  username: { type: String, required: true, unique: true },

  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  comments: [{ type: String, ref: comment_model }],
  posts: [{ type: String }],
});
userShema.plugin(uniqueValidator); //
module.exports = mongoose.model("user_model", userShema);
