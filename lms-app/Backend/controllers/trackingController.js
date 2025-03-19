const Tracking = require("../models/TrackingModel");

// Track user progress
const trackProgress = async (req, res) => {
  try {
    const { userId, courseId, progress } = req.body;

    let tracking = await Tracking.findOne({ userId, courseId });

    if (tracking) {
      tracking.progress = progress;
      await tracking.save();
    } else {
      tracking = new Tracking({ userId, courseId, progress });
      await tracking.save();
    }

    res.status(200).json(tracking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user progress
const getUserProgress = async (req, res) => {
  try {
    const { userId } = req.params;
    const progressData = await Tracking.find({ userId });

    res.status(200).json(progressData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { trackProgress, getUserProgress };
