const express = require('express');
const router = express.Router();
const { createAssignment, submitAssignment } = require('../controllers/assignmentController');
const auth = (req, res, next) => next(); // Mock auth middleware

router.post('/', auth, createAssignment);        // Create an assignment (teacher)
router.post('/submit', auth, submitAssignment);  // Submit an assignment (student)

module.exports = router;