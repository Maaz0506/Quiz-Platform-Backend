const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      validate: { len: [3, 40] },
    },
    username: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: { type: DataTypes.STRING, allowNull: false },
  });
  return User;
};
