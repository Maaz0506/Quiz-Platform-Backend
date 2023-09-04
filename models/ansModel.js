const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define("answer", {
      answerId: { type: DataTypes.INTEGER, allowNull: false,primaryKey:true,unique:true },
      answerText: { type: DataTypes.STRING, allowNull: false },
      isCorrect: { type: DataTypes.BOOLEAN, allowNull: false },
      questionId: { type: DataTypes.INTEGER, allowNull: false,references:{model:"questions",key:"questionId"}}
    });
    return Answer;
  };