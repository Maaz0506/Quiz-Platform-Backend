const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define("answer", {
      answerId: { type: DataTypes.INTEGER, allowNull: false,primaryKey:true,unique:true },
      answerText: { type: DataTypes.STRING, allowNull: false },
      isCorrect: { type: DataTypes.BOOLEAN, allowNull: false },
      questionId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        validate: { len: [3, 40] },
      },
    });
    return Answer;
  };