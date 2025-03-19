const QuizModel = require('../models/QuizModel');

exports.createQuiz = async (req, res) => {
  const { title, courseId, questions } = req.body;
  try {
    const quizId = await QuizModel.create(title, courseId, req.user?.id || 1); // Mock teacher_id as 1 if no auth
    for (const q of questions) {
      await QuizModel.addQuestion(quizId, q.questionText, q.options, q.correctAnswer);
    }
    res.status(201).json({ id: quizId, title, courseId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create quiz' });
  }
};

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await QuizModel.findById(req.params.quizId);
    if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
    res.json(quiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch quiz' });
  }
};

exports.submitQuiz = async (req, res) => {
  const { quizId, answers } = req.body;
  try {
    const result = await QuizModel.submit(quizId, req.user?.id || 1, answers); // Mock student_id as 1 if no auth
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
};