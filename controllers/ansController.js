// const db = require("../models");
// const Answer = db.answer;

// const addAnswers = async (req, res) => {
//   let info = {
//     answerText: req.body.answerText,
//     isCorrect: req.body.isCorrect,
//     questionId: req.body.questionId,
//   };

//   const answer = await Answer.create(info);
//   res.status(200).send(answer);
// };

// const getAnswers = async (req, res) => {
//   const answers = await Answer.findAll();
//   res.status(200).send(answers);
// };
// const answerById = async (req, res) => {
//   let id = req.params.id;
//   const answer = await Answer.findOne({ where: { id: id } });
//   res.status(200).send(answer);
// };

// module.exports = {
//   addAnswers,
//   getAnswers,
//   answerById,
// };
