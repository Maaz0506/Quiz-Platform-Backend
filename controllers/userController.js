const db = require("../models");
const User = db.user;
const { v4: uuidv4 } = require("uuid");

const addUser = async (req, res) => {
  let info = {
    userId: uuidv4(),
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  const user = await User.create(info);

  res.status(200).send(user);
};
const getAllUsers = async (req, res) => {
 const users = await User.findAll({});
  res.status(200).send(users);
};
// const getUserById=as

module.exports = { addUser, getAllUsers };
