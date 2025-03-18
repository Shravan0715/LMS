const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// ✅ Fetch all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Add a course
router.post('/', async (req, res) => {
  try {
    const { title, description, teacher } = req.body;
    const newCourse = new Course({ title, description, teacher });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ message: "Failed to add course" });
  }
});
// ✅ Delete a course
router.delete('/:id', async (req, res) => {
    try {
      const courseId = req.params.id;
      const deletedCourse = await Course.findByIdAndDelete(courseId);
  
      if (!deletedCourse) {
        return res.status(404).json({ message: "Course not found" });
      }
  
      res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
      console.error("Backend Error:", error);
      res.status(500).json({ message: "Failed to delete course" });
    }
  });
  

module.exports = router;
