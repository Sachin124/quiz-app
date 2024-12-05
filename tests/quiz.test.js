const request = require("supertest");
const app = require("../app");

describe("Quiz API Endpoints", () => {
  let quizId;
  const userId = "user123";

  it("should create a new quiz", async () => {
    const response = await request(app)
      .post("/api/quiz")
      .send({
        title: "Sample Quiz",
        questions: [
          {
            id: "q1",
            text: "Question 1?",
            options: ["A", "B"],
            correctOption: "A",
          },
        ],
      });

    expect(response.status).toBe(201);
    quizId = response.body.id;
  });

  it("should fetch a quiz by its ID", async () => {
    const response = await request(app).get(`/api/quiz/${quizId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", quizId);
    expect(response.body).toHaveProperty("title", "Sample Quiz");
  });

  it("should submit an answer and provide feedback", async () => {
    const response = await request(app)
      .post(`/api/quiz/${quizId}/answer`)
      .send({
        user_id: userId,
        question_id: "q1",
        answer: "A",
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("correct", true);
  });

  it("should fetch the results for the quiz", async () => {
    const response = await request(app).get(
      `/api/quiz/${quizId}/results?user_id=${userId}`
    );
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("score");
  });
});
