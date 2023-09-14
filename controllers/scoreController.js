const db = require("../models");
const Score = db.score;
const {v4:uuidv4}=require("uuid")

const addScore = async (req, res) => {
  let info = {
    scoreId: uuidv4(),
    email:req.body.email,
    quizId: req.body.quizId,
    score: req.body.score,
  };

  const score = await Score.create(info);
  res.status(200).send(score);
};

const getScores = async (req, res) => {
  const scores = await Score.findAll();
  res.status(200).send(scores);
};

const scoreById = async (req, res) => {
  const email = req.params.email
  const score = await Score.findAll({ where: { email:email } });
  res.status(200).send(score);
};

module.exports = {
  addScore,
  scoreById,
  getScores,
};
