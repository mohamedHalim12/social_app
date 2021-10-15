var express = require("express");
var router = express.Router();
const post_model = require("../models/post_model");
const path = require("path");

router.get("/", function (req, res, next) {
  res.render("home");
});
router.get("/data-base", function (req, res, next) {
  // res.render("dataBase");
  post_model
    .find()
    .then((postData) => res.status(200).json(postData))
    .catch((error) => res.status(400).json({ error }));
});
router.get("/add_post", function (req, res, next) {
  res.render("addPost");
});
router.post("/add_post", async function (req, res, next) {
  console.log(req.body);
  const postData = await post_model.create({ ...req.body });
});
router.get("/users", function (req, res, next) {
  res.render("users", {});
});

module.exports = router;
