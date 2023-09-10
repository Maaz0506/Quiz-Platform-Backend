module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define("question", {
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    questionText: { type: DataTypes.STRING, allowNull: false },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "types", key: "quizId" },
    },
    option1: { type: DataTypes.STRING, allowNull: false },
    option2: { type: DataTypes.STRING, allowNull: false },
    option3: { type: DataTypes.STRING, allowNull: false },
    option4: { type: DataTypes.STRING, allowNull: false },
    isCorrect: { type: DataTypes.STRING, allowNull: false },
  });
  return Question;
};
