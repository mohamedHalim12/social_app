var express = require("express");
var router = express.Router();

/* GET users listing. */
router.route("/").get(v).post(v);

module.exports = router;

function v(req, res, next) {
  res.render("users");
}
