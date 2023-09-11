const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define("question", {
    id:{type:DataTypes.UUIDV4,primaryKey:true},
    questionId:{type:DataTypes.INTEGER},
    questionText: { type: DataTypes.STRING, allowNull: false, },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: { model: "types", key: "quizId" },
    },
  });
  return Question;
};