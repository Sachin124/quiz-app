class Quiz {
    constructor(id, title, questions){
        this.id = id;
        this.title = title;
        this.questions = questions;
    }
}

class Answer{
    constructor(questionId, selectedOption, isAnsCorrect){
        this.questionId = questionId;
        this.selectedOption = selectedOption;
        this.isAnsCorrect = isAnsCorrect;
    }
}

class Question{
    constructor(id, text, options, correctOption){
        this.id = id;
        this.text = text;
        this.options = options;
        this.correctOption = correctOption;
    }
}

class Result{
    constructor(quizId, userId, score, answer){
        this.quizId = quizId;
        this.userId = userId;
        this.score = score;
        this.answer = answer;
    }
}


module.exports = {Quiz, Answer, Question, Result};