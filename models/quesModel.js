module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define("question", {
     questionId: { type: DataTypes.INTEGER, allowNull: false,primaryKey:true },
      questionText: { type: DataTypes.STRING, allowNull: false },
      quizId: { type: DataTypes.INTEGER, allowNull: false,references:{model:"types",key:"quizId"} },
    });
    return Question
  };
  