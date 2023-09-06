module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define("question", {
    questionId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      validate: { len: [3, 40] },
    },
    questionText: { type: DataTypes.STRING, allowNull: false },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "types", key: "quizId" },
    },
  });
  return Question;
};
