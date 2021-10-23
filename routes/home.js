var express = require("express");
var router = express.Router();
const post_model = require("../models/post_model");
const user_model = require("../models/user_model");
const comment_model = require("../models/comment_model");
const path = require("path");
const jwt = require("jsonwebtoken");
var cookie = require("cookie");

router.get("/", async function (req, res, next) {
  /*  let post = await post_model
    .find()
    .sort({ date: -1 })
    .populate({ path: "author", select: "username -_id" })
    .exec(); */

  let postComment = await post_model
    .find()
    .sort({ date: -1 })
    .populate({ path: "author", select: "username -_id" })
    .populate({ path: "comments" })
    .exec();

  res.render("home", { posts: postComment });
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
  let addAuthorToUser = await user_model.findOneAndUpdate(
    { _id: userId },
    { $push: { posts: postD._id } },
    { new: true },
  );
  res.redirect("/home");
});
router.get("/users", function (req, res, next) {
  res.render("users", {});
});
router.post("/comment", async function (req, res, next) {
  const token = JSON.parse(cookie.parse(req.headers.cookie).token).jwt;
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  let userId = decodedToken.userId;
  let userIdName = await user_model
    .findById(userId)
    .select("username -_id")
    .exec();

  const comment = await comment_model.create({
    author: userIdName.username,
    comment: req.body.comment,
    date: Date.now(),
  });
  let addCommentToPost = await post_model.findByIdAndUpdate(
    req.body.post_id,
    { $push: { comments: comment._id } },
    { new: true },
  );

  res.status(200).redirect("/home");
});

module.exports = router;
