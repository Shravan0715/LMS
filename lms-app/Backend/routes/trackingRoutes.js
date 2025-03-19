const express = require("express");
const { trackProgress, getUserProgress } = require("../controllers/trackingController");

const router = express.Router();

// Route to track user progress
router.post("/", trackProgress);

// Route to get user progress
router.get("/:userId", getUserProgress);

module.exports = router;
