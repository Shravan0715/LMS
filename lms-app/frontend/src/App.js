import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizPage from './pages/QuizPage';
import AssignmentPage from './pages/AssignmentPage';
import QuizForm from './components/QuizForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/assignment" element={<AssignmentPage />} />
        <Route path="/create-quiz" element={<QuizForm />} />
      </Routes>
    </Router>
  );
}

export default App;