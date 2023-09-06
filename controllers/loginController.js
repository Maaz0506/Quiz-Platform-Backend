const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const { where } = require("sequelize");
require("dotenv").config();
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
  // console.log(JSON.stringify(foundUser));
  console.log(password, foundUser.password);
  //   const match = await bcrypt.compare(password, foundUser.password);
  const match = password === foundUser.password;
  console.log(match);
  if (match) {
    const accessToken = jwt.sign(
      { email: foundUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "300s" }
    );

    // try {
    //   const userUpdated = await updateUser(foundUser.email, { refreshtoken });
    //   console.log(userUpdated);
    //   if (userUpdated[0] === 1) {
    //     console.log("User updated successfully");
    //   } else {
    //     console.log("User not found or not updated");
    //   }
    // } catch (error) {
    //   console.error("Error updating user:", error);
    // }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const refreshtoken = jwt.sign(
      { email: foundUser.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    await refreshtoken.create({ userId: user.id, token: refreshtoken });
    res.json({ accessToken, refreshtoken });

    // Your other API routes and middleware here

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });

    app.post("/refresh-token", async (req, res) => {
      const { refreshToken } = req.body;

      // Verify the refresh token
      const decoded = jwt.verify(refreshToken, "your-refresh-secret-key");

      // Check if the refresh token is valid and not expired
      if (!decoded || decoded.exp <= Date.now() / 1000) {
        return res
          .status(401)
          .json({ message: "Invalid or expired refresh token" });
      }

      // Generate a new access token
      const accessToken = jwt.sign(
        { userId: decoded.userId },
        "your-secret-key",
        { expiresIn: "15m" }
      );

      res.json({ accessToken });
    });

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

module.exports = { handleLogin, updateUser };
