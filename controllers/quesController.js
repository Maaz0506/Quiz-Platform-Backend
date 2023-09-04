const db = require("../models");
const Question = db.question;

const addQuestions = async (req, res) => {
  let info = {
    questionId: req.body.questionId,
    questionText: req.body.questionText,
    quizId: req.body.quizId,
  };

  const question = await Question.create(info);
  res.status(200).send(question);
};

const getAllQuestions = async (req, res) => {
  const questions = await Question.findAll({});
  res.status(200).send(questions);
};

const questionById = async (req, res) => {
  let id = req.params.id;
  const question = await Question.findOne({ where: { id: id } });
  res.status(200).send(question);
};

module.exports = {
  addQuestions,
  getAllQuestions,
  questionById,
};
