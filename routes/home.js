var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("home");
});
router.get("/add_news", function (req, res, next) {
  res.render("addNews");
});
router.get("/add_post", function (req, res, next) {
  res.render("addPost");
});
router.get("/users", function (req, res, next) {
  res.render("users");
});

module.exports = router;
