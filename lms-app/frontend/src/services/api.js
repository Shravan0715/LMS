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