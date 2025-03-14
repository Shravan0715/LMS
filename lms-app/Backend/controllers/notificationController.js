const Notification = require("../models/NotificationModel");

// Get all notifications
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new notification
const createNotification = async (req, res) => {
  try {
    const { message, user } = req.body;
    const newNotification = new Notification({ message, user });
    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getNotifications, createNotification };
