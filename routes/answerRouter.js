const answerController = require("../controllers/ansController.js");

const router = require("express").Router();

router.post("/addAnswers", answerController.addAnswers);

router.get("/getAnswers", answerController.getAnswers);

router.get("/:id", answerController.answerById);
