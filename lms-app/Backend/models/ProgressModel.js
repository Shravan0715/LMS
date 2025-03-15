const db = require('../config/db');

const ProgressModel = {
  updateProgress: async (studentId, courseId, progressPercentage) => {
    const [existing] = await db.query('SELECT * FROM progress WHERE student_id = ? AND course_id = ?', [studentId, courseId]);
    if (existing.length) {
      await db.query('UPDATE progress SET progress_percentage = ?, updated_at = NOW() WHERE student_id = ? AND course_id = ?', [progressPercentage, studentId, courseId]);
    } else {
      await db.query('INSERT INTO progress (student_id, course_id, progress_percentage) VALUES (?, ?, ?)', [studentId, courseId, progressPercentage]);
    }
  },
  getProgress: async (studentId, courseId) => {
    const [rows] = await db.query('SELECT progress_percentage FROM progress WHERE student_id = ? AND course_id = ?', [studentId, courseId]);
    return rows[0]?.progress_percentage || 0;
  },
};

module.exports = ProgressModel;