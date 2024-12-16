import { createQuiz, getQuizById } from "../services/QuizService";

// Mocking QuizService methods
jest.mock('../services/QuizService', () => ({
  createQuiz: jest.fn(),
  getQuizById: jest.fn(),
}));

test("Create and retrieve quiz", () => {
  const quiz = {
    id: "1",
    title: "Sample Quiz",
    questions: [
      {
        id: "q1",
        text: "What is 2+2?",
        options: ["3", "4", "5", "6"],
        correct_option: 1
      }
    ]
  };

  // Mock the function behavior
  createQuiz.mockReturnValue(quiz);
  getQuizById.mockReturnValue(quiz);

  expect(getQuizById("1")).toEqual(quiz);
  expect(createQuiz).toHaveBeenCalledWith({
    id: "1",
    title: "Sample Quiz",
    questions: [
      {
        id: "q1",
        text: "What is 2+2?",
        options: ["3", "4", "5", "6"],
        correct_option: 1
      }
    ]
  });
});
