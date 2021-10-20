const bcrypt = require("bcrypt");
const user_model = require("../../models/user_model");
const jwt = require("jsonwebtoken");
const ms = require("ms");

exports.signup = async (req, res, next) => {
  try {
    let hash = await bcrypt.hash(req.body.password, 10);
    const user = await user_model.create({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash,
    });

    res.redirect("/home");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.signin = async (req, res, next) => {
  try {
    let user = await user_model.findOne({ email: req.body.email }).exec();
    // console.log(user);
    if (!user) {
      return res.status(401).json({ error: "Utilisateur non trouvé" });
    }
    let password = await bcrypt.compare(req.body.password, user.password);
    if (!password) {
      return res.status(401).json({ error: "Mot de passe incorect !" });
    }
    let token = jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
      expiresIn: "24h",
    });
    let tokenJson = JSON.stringify({ jwt: token });
    res.cookie("token", tokenJson, {
      maxAge: ms("1d"),
      httpOnly: true,
      secure: false,
    });
    // console.log(token);
    res.redirect("/home");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
