const db = require('../config/db');

const AssignmentModel = {
  create: async (quizId, description, courseId) => {
    const [result] = await db.query('INSERT INTO assignments (quiz_id, description, course_id) VALUES (?, ?, ?)', [quizId, description, courseId]);
    return result.insertId;
  },
  submit: async (assignmentId, studentId, fileUrl) => {
    await db.query('INSERT INTO assignment_submissions (assignment_id, student_id, file_url) VALUES (?, ?, ?)', [assignmentId, studentId, fileUrl]);
  },
  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM assignments WHERE id = ?', [id]);
    return rows[0] || null;
  },
};

module.exports = AssignmentModel;