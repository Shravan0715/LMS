const express = require('express');
const router = express.Router();
const { getProgress, updateProgress } = require('../controllers/progressController');
const auth = (req, res, next) => next(); // Mock auth middleware

router.get('/:courseId/:studentId', auth, getProgress);       // Get student progress
router.post('/update/:courseId/:studentId', auth, updateProgress); // Update student progress

module.exports = router;