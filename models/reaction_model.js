const mongoose = require("mongoose");

const reactionShema = mongoose.Schema({
  disliked: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
  liked: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
});

module.exports = mongoose.model("reaction_model", reactionShema);
