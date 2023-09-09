const questionController = require("../controllers/quesController.js");

const router = require("express").Router();

router.post("/addQuestions", questionController.addQuestions);
router.get("/questionWithAnswer",questionController.questionsWithAnswers)
router.get("/getQuestions", questionController.getAllQuestions);

router.get("/:id", questionController.questionById);

module.exports = router;
