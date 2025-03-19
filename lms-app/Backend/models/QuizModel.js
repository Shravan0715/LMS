const db = require('../config/db');

const QuizModel = {
  create: async (title, courseId, teacherId) => {
    const [result] = await db.query('INSERT INTO quizzes (title, course_id, teacher_id) VALUES (?, ?, ?)', [title, courseId, teacherId]);
    return result.insertId;
  },
  addQuestion: async (quizId, questionText, options, correctAnswer) => {
    await db.query('INSERT INTO quiz_questions (quiz_id, question_text, options, correct_answer) VALUES (?, ?, ?, ?)', [quizId, questionText, JSON.stringify(options), correctAnswer]);
  },
  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM quizzes WHERE id = ?', [id]);
    const [questions] = await db.query('SELECT * FROM quiz_questions WHERE quiz_id = ?', [id]);
    return rows[0] ? { ...rows[0], questions: questions.map(q => ({ ...q, options: JSON.parse(q.options) })) } : null;
  },
  submit: async (quizId, studentId, answers) => {
    const quiz = await QuizModel.findById(quizId);
    let score = 0;
    quiz.questions.forEach((q, i) => {
      if (q.correct_answer === answers[i]) score++;
    });
    await db.query('INSERT INTO quiz_submissions (quiz_id, student_id, answers, score) VALUES (?, ?, ?, ?)', [quizId, studentId, JSON.stringify(answers), score]);
    return { score, total: quiz.questions.length };
  },
};

module.exports = QuizModel;