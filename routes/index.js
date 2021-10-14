var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Likeee App", doudou: 145 });
});
router.get("/sign_in", function (req, res, next) {
  res.render("signin");
});

router.get("/sign_up", function (req, res, next) {
  res.render("signup");
});
module.exports = router;
