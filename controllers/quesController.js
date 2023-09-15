const db = require("../models");
const Question = db.question;
const { v4: uuidv4 } = require("uuid");
const {QueryTypes}=require("sequelize")

const addQuestion = async (req, res) => {
  let info = {
    id:uuidv4(),
    questionText: req.body.questionText,
    quizId: req.body.quizId,
    questionId: req.body.questionId,
  
  };

  const question = await Question.create(info);
  res.status(200).send(question);
};

const getAllQuestions = async (req, res) => {
  const questions = await Question.findAll({});
  res.status(200).send(questions);
};

const questionById = async (req, res) => {
  let quizId = req.params.quizId;
  console.log(quizId)
  const question = await Question.findAll({ where: { quizId: quizId } });
  res.status(200).send(question);
};

const questionsWithAnswers = async (req, res) => {
  const {quizId}=req.query
  console.log(quizId)
  const questionwithAnswer = await db.sequelize.query(
    `SELECT questionText,quizId,option1,option2,option3,option4,isCorrect from questions where quizId=${quizId}`,
        { type: QueryTypes.SELECT }
  );
  // console.log(quizId)
  res.status(200).send(questionwithAnswer)
};

module.exports = {
  addQuestion,
  getAllQuestions,
  questionById,
  // questionsWithAnswers
};
