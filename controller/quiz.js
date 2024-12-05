const { quizzes } = require("../data/data");
const { Quiz, Question } = require("../models/model");
const { v4: uuidv4 } = require("uuid");


const addQuiz = (req, res)=>{
    const {title, questions} = req.body;
    if (!title || !questions || !Array.isArray(questions)) {
        res.status(400).send({error: "Bad request, please check the payload"})
    }
    const quiz_id = uuidv4();
    const question_id = uuidv4();

    const quiz = new Quiz(quiz_id, title, questions.map((q, id)=> new Question(question_id, q.text, q.options, q.correctOption)));

    quizzes.push(quiz);
    res.status(201).send({quiz_id: quiz_id, question_id: question_id});
}


const getQuizById = (req, res)=>{
    const {id} = req.params;

    const quiz  = quizzes.find((e)=> e.id === id);

    if (!quiz) {
        res.status(404).send("Quiz not found!");
    }

    const filterQuiz = {...quiz, questions: quiz.questions.map(({id, text, options})=>({id, text, options}))};

    res.status(200).send(filterQuiz)
}


// Submit an answer
const submitAnswer = (req, res) => {
    const { quizId } = req.params;
    const { questionId, selectedOption } = req.body;
  
    const quiz = quizzes.find((q) => q.id === quizId);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }
  
    const question = quiz.questions.find((q) => q.id === questionId);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }
  console.log(question);
  
    const isCorrect = question.correctOption === selectedOption;
    res.json({ isCorrect, correctOption: `Correct Option is ${question.correctOption}` });
  };
  
  // Get user results for a quiz
  const getResults = (req, res) => {
    const { quizId } = req.params;
    const userResult = results.find((r) => r.quizId === quizId);
    if (!userResult) {
      return res.status(404).json({ error: "Results not found" });
    }
  
    res.json(userResult);
  };

module.exports = {addQuiz, getQuizById, submitAnswer, getResults}