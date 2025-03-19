const express = require('express');
const router = express.Router();
const { createQuiz, getQuiz, submitQuiz } = require('../controllers/quizController');
const auth = (req, res, next) => next(); // Mock auth middleware

router.post('/', auth, createQuiz);        // Create a quiz (teacher)
router.get('/:quizId', auth, getQuiz);     // Get quiz details
router.post('/submit', auth, submitQuiz);  // Submit quiz answers (student)

module.exports = router;