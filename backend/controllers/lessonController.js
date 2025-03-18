const Lesson = require('../models/Lesson');

// Get all lessons
exports.getLessons = async (req, res) => {
    const lessons = await Lesson.find().populate('courseId');
    res.json(lessons);
};

// Add a new lesson
exports.addLesson = async (req, res) => {
    const { title, courseId } = req.body;
    const newLesson = new Lesson({ title, courseId });
    await newLesson.save();
    res.json(newLesson);
};

// Delete a lesson
exports.deleteLesson = async (req, res) => {
    await Lesson.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lesson deleted' });
};
