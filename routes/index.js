var express = require("express");
var router = express.Router();
const userCtrl = require("./controlers/user_controler");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Likeee App", doudou: 145 });
});
router.get("/sign_in", function (req, res, next) {
  res.render("signin");
});
router.post("/sign_in", userCtrl.signin);

router.get("/sign_up", function (req, res, next) {
  res.render("signup");
});
router.post("/sign_up", userCtrl.signup);
module.exports = router;
