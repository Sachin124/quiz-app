const express = require("express");
const { addQuiz, getQuizById, submitAnswer, getResults } = require("../controller/quiz");


const router = express.Router();

router.post("/quiz", addQuiz);
router.get("/quiz/:id", getQuizById);
router.post("/quiz/:quizId/answer", submitAnswer);
router.get("/quiz/:quizId/results", getResults);

module.exports = router;