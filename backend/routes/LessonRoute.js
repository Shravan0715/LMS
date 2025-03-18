const express = require('express');
const Lesson = require('../models/Lesson');
const Course = require('../models/Course');

const router = express.Router();

// ➤ Add a Lesson to a Course
router.post('/:courseId/lessons', async (req, res) => {
  try {
    const { title } = req.body;
    const { courseId } = req.params;

    const lesson = new Lesson({ title, courseId });
    await lesson.save();

    await Course.findByIdAndUpdate(courseId, { $push: { lessons: lesson._id } });

    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ error: "Failed to add lesson" });
  }
});

// ➤ Get Lessons of a Course
router.get('/:courseId/lessons', async (req, res) => {
  try {
    const { courseId } = req.params;
    const lessons = await Lesson.find({ courseId });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch lessons" });
  }
});

// ➤ Delete a Lesson
router.delete('/lessons/:lessonId', async (req, res) => {
  try {
    const { lessonId } = req.params;
    await Lesson.findByIdAndDelete(lessonId);
    res.json({ message: "Lesson deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete lesson" });
  }
});

module.exports = router;
