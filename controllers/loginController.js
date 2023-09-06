const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const { where } = require("sequelize");
const User = db.user;
const getAllUsers = async (req, res) => {
  let users = await User.findAll({});
  return users;
};
const updateUser = async (userEmail, dataToUpdate) => {
  try {
    const updated = await User.update(dataToUpdate, {
      where: { email: userEmail },
    });
    return updated;
  } catch (error) {
    throw error;
  }
};
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  let user = await getAllUsers(req, res);
  const foundUser = user.find((person) => person.email === email);
  // console.log(JSON.stringify(foundUser));
  console.log(password, foundUser.password);
  //   const match = await bcrypt.compare(password, foundUser.password);
  const match = password === foundUser.password;
  console.log(match);
  if (match) {
    const accessToken = jwt.sign(
      { "email": foundUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "300s" }
    );
    const refreshtoken = jwt.sign(
      { "email": foundUser.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    try {
      const userUpdated = await updateUser(foundUser.email, { refreshtoken });
      console.log(userUpdated);
      if (userUpdated[0] === 1) {
        console.log("User updated successfully");
      } else {
        console.log("User not found or not updated");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }

    const otherUsers = user.filter(
      (person) => person.email !== foundUser.email
    );
    const currentUser = { ...foundUser, refreshtoken };

    res.json({ success: `Welcome back ${foundUser.username}` });
  } else {
    res
      .sendStatus(401)
      .json({ message: "You are not authorized to hit the api" });
  }
};
module.exports = { handleLogin };
