const AssignmentModel = require('../models/AssignmentModel');

exports.createAssignment = async (req, res) => {
  const { quizId, description, courseId } = req.body;
  try {
    const assignmentId = await AssignmentModel.create(quizId, description, courseId);
    res.status(201).json({ id: assignmentId, quizId, description, courseId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create assignment' });
  }
};

exports.submitAssignment = async (req, res) => {
  const { assignmentId, fileUrl } = req.body;
  try {
    await AssignmentModel.submit(assignmentId, req.user?.id || 1, fileUrl); // Mock student_id as 1 if no auth
    res.json({ message: 'Assignment submitted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit assignment' });
  }
};