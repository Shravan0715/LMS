const db = require('../config/db');
const ProgressModel = require('../models/ProgressModel');

exports.getProgress = async (req, res) => {
  const { courseId, studentId } = req.params;
  try {
    const progress = await ProgressModel.getProgress(studentId, courseId);
    res.json({ progress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch progress' });
  }
};

exports.updateProgress = async (req, res) => {
  const { courseId, studentId } = req.params;
  try {
    const [quizSubmissions] = await db.query('SELECT COUNT(*) as count FROM quiz_submissions WHERE student_id = ? AND quiz_id IN (SELECT id FROM quizzes WHERE course_id = ?)', [studentId, courseId]);
    const [assignmentSubmissions] = await db.query('SELECT COUNT(*) as count FROM assignment_submissions WHERE student_id = ? AND assignment_id IN (SELECT id FROM assignments WHERE course_id = ?)', [studentId, courseId]);
    const [totalQuizzes] = await db.query('SELECT COUNT(*) as count FROM quizzes WHERE course_id = ?', [courseId]);
    const [totalAssignments] = await db.query('SELECT COUNT(*) as count FROM assignments WHERE course_id = ?', [courseId]);

    const totalItems = totalQuizzes[0].count + totalAssignments[0].count;
    const completedItems = quizSubmissions[0].count + assignmentSubmissions[0].count;
    const progressPercentage = totalItems ? (completedItems / totalItems) * 100 : 0;

    await ProgressModel.updateProgress(studentId, courseId, progressPercentage);
    res.json({ progress: progressPercentage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update progress' });
  }
};