const mongoose = require("mongoose");

const userShema = mongoose.Schema({
  userName: { type: "string", required: true },
  firstName: { type: "string", required: true },
  lastName: { type: "string", required: true },
  email: { type: "string", required: true },
  password: { type: "string", required: true },
});

module.exports = mongoose.model("user_model", userShema);
