const db = require("../models");
const Question = db.question;
const { v4: uuidv4 } = require("uuid");
const {QueryTypes}=require("sequelize")

const addQuestions = async (req, res) => {
  let info = {
    questionId: uuidv4(),
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

const questionsWithAnswers = async (req, res) => {
  const questionwithAnswer = await db.sequelize.query(
    "SELECT Q.questionText,A.answerText,A.isCorrect from questions Q,answers A where Q.questionId=A.questionId ",
    { type: QueryTypes.SELECT }
  );
  res.status(200).send(questionwithAnswer)
};

module.exports = {
  addQuestions,
  getAllQuestions,
  questionById,
  questionsWithAnswers
};
