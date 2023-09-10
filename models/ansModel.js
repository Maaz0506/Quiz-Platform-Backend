// const { DataTypes } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
//   const Answer = sequelize.define("answer", {
//     answerId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       unique: true,
//       autoIncrement: true,
//     },
//     answerText: { type: DataTypes.STRING, allowNull: false,unique:true },
//     isCorrect: { type: DataTypes.BOOLEAN, allowNull: false },
//     questionId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       unique: true,
//       references: { model: "questions", key: "questionId" },
//     },
//   });
//   return Answer;
// };
