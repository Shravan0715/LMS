import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch forum discussions
export const fetchForumPosts = async () => {
  const response = await API.get("/forum");
  return response.data;
};

// Post a new discussion
export const postForumMessage = async (message) => {
  const response = await API.post("/forum", message);
  return response.data;
};

// Fetch notifications
export const fetchNotifications = async () => {
  const response = await API.get("/notifications");
  return response.data;
};

// Fetch learning progress
export const fetchUserProgress = async (userId) => {
  const response = await API.get(`/tracking/${userId}`);
  return response.data;
};

export default API;
