const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.user;

const getAllUsers = async (req, res) => {
  let users = await User.findAll({});
  return users;
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  let user = await getAllUsers(req, res);
  const foundUser = user.find((person) => person.email === email);
  const match = password === foundUser.password;
  if (match) {
    const accessToken = jwt.sign(
      { email: foundUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "2h" }
    );
    res.json({ accessToken: accessToken });
  } else {
    res
      .sendStatus(401)
      .json({ message: "You are not authorized to hit the api" });
  }
};
module.exports = { handleLogin };
