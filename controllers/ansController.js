const db = require("../models");
const Answer = db.answer;

const addAnswers = async (req, res) => {
  let info = {
    answerId:req.body.answerId,
    answerText: req.body.answerText,
    isCorrect: req.body.isCorrect,
    questionId: req.body.questionId,
    quizId:req.body.quizId
  };

  const answer = await Answer.create(info);
  res.status(200).send(answer);
};

const getAnswers = async (req, res) => {
  const answers = await Answer.findAll();
  res.status(200).send(answers);
};
const answerById = async (req, res) => {
  let quizId = req.params.quizId;
  const answer = await Answer.findAll({ where: { quizId: quizId } });
  res.status(200).send(answer);
};

module.exports = {
  addAnswers,
  getAnswers,
  answerById,
};
