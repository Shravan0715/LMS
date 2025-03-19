const mongoose = require("mongoose");

const TrackingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  courseId: { type: String, required: true },
  progress: { type: Number, required: true, min: 0, max: 100 },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tracking", TrackingSchema);
