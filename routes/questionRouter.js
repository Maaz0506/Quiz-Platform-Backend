const questionController = require("../controllers/quesController.js");

const router = require("express").Router();

router.post("/addQuestions", questionController.addQuestion);
router.get("/questionWithAnswer",questionController.questionsWithAnswers)
router.get("/getQuestions", questionController.getAllQuestions);

router.get("/:quizId", questionController.questionById);

module.exports = router;