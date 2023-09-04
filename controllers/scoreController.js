const db = require("../models");
const Score = db.score;

const addScore = async (req, res) => {
  let info = {
    scoreId: req.body.scoreId,
    userId: req.body.userId,
    quizId: req.body.quizId,
    score: req.body.score,
    playedAt: req.body.playedAt,
  };

  const score = await Score.create(info);
  res.status(200).send(score);
};

const getScores = async (req, res) => {
  const scores = await Score.findAll();
  res.status(200).send(scores);
};

const scoreById = async (req, res) => {
  let id = req.params.id;
  const score = await Score.findOne({ where: { id: id } });
  res.status(200).send(score);
};

module.exports = {
  addScore,
  scoreById,
  getScores,
};
