const scoreController = require("../controllers/scoreController.js");

const router = require("express").Router();

router.post("/addScore", scoreController.addScore);

router.get("/getScores", scoreController.getScores);

router.get("/:email", scoreController.scoreById);
module.exports = router;
