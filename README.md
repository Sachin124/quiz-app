# Quiz App Backend

A RESTful API-based Quiz Application that allows users to:
- Create a quiz with multiple-choice questions.
- Retrieve quizzes without revealing correct answers.
- Submit answers to questions and receive immediate feedback.
- Get user results including score and answer summaries.

---

## **Features**
- Create and manage quizzes with multiple-choice questions.
- Submit answers and receive real-time feedback.
- Retrieve user results for specific quizzes.
- In-memory storage for data (no database dependency).
- Well-structured RESTful APIs with validation and error handling.

---

## **Technologies Used**
- **Language**: JavaScript
- **Framework**: Node.js with Express
- **In-Memory Storage**: Arrays
- **Testing**: Jest (optional)
- **Containerization**: Docker

---

## **Setup and Execution**

### **Pre-requisites**
1. Install **Node.js** (v14 or above) and **npm**.
   - [Download Node.js](https://nodejs.org)
2. Install dependencies: **Docker** (for containerized deployment).
3. Build Docker Imagedocker build -t quiz-app ..
4. Run Container docker run -p 3000:3000 quiz-app

---

