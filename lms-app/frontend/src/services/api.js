<<<<<<< .merge_file_7aMQJ5
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const createQuiz = (data) => api.post('/quizzes', data);
export const getQuiz = (quizId) => api.get(`/quizzes/${quizId}`);
export const submitQuiz = (data) => api.post('/quizzes/submit', data);
export const createAssignment = (data) => api.post('/assignments', data);
export const submitAssignment = (data) => api.post('/assignments/submit', data);
export const getProgress = (courseId, studentId) => api.get(`/progress/${courseId}/${studentId}`);
export const updateProgress = (courseId, studentId) => api.post(`/progress/update/${courseId}/${studentId}`);

export default api;
=======
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
>>>>>>> .merge_file_lepVHL
