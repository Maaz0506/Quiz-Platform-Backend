const db = require("../models");
const Type = db.type;

const addType = async (req, res) => {
  let info = {
    quizId: req.body.quizId,
    quizName: req.body.quizName,
  };

  const type = await Type.create(info);
  res.status(200).send(type);
};

const getTypes = async (req, res) => {
  const types = await Type.findAll();
  res.status(200).send(types);
};

const typeById = async (req, res) => {
  let id = req.params.id;
  const type = await Type.findOne({ where: { id: id } });
  res.status(200).send(type);
};

module.exports = {
  addType,
  getTypes,
  typeById,
};
