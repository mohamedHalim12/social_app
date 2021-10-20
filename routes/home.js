var express = require("express");
var router = express.Router();
const post_model = require("../models/post_model");
const user_model = require("../models/user_model");
const path = require("path");
const jwt = require("jsonwebtoken");
var cookie = require("cookie");

router.get("/", async function (req, res, next) {
  const token = JSON.parse(cookie.parse(req.headers.cookie).token).jwt;
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  let userId = decodedToken.userId;
  let user = await user_model.findById(userId).exec();
  let post = await post_model.find().sort({ date: -1 }).exec();
  console.log(post);
  res.render("home", { username: user.username, posts: post });
});
router.get("/data-base", function (req, res, next) {
  // res.render("dataBase");
});
router.get("/add_post", function (req, res, next) {
  res.render("addPost");
});
router.post("/add_post", async function (req, res, next) {
  const token = JSON.parse(cookie.parse(req.headers.cookie).token).jwt;
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  let userId = decodedToken.userId;

  const postD = await post_model.create({
    title: req.body.title,
    information: req.body.information,
    date: Date.now(),
    author: userId,
  });
  res.redirect("/home");
});
router.get("/users", function (req, res, next) {
  res.render("users", {});
});

module.exports = router;
