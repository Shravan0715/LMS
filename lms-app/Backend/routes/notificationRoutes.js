const express = require("express");
const { getNotifications, createNotification } = require("../controllers/notificationController");

const router = express.Router();

// Route to get all notifications
router.get("/", getNotifications);

// Route to create a new notification
router.post("/", createNotification);

module.exports = router;
