// courseController.js
const Course = require('../models/Course');
exports.getCourses = async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
};
exports.addCourse = async (req, res) => {
    const { name } = req.body;
    const newCourse = new Course({ name });
    await newCourse.save();
    res.json(newCourse);
};
exports.deleteCourse = async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted' });
};