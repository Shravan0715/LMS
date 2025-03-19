<<<<<<< .merge_file_zPxY0D
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizPage from './pages/QuizPage';
import AssignmentPage from './pages/AssignmentPage';
import QuizForm from './components/QuizForm';
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForumPage from "./pages/ForumPage";
import TrackingPage from "./pages/TrackingPage";
import NotificationBell from "./components/NotificationBell";
import Navbar from "./components/Navbar";
import "./App.css";
>>>>>>> .merge_file_przKdn

const App = () => {
  return (
    <Router>
<<<<<<< .merge_file_zPxY0D
      <Routes>
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/assignment" element={<AssignmentPage />} />
        <Route path="/create-quiz" element={<QuizForm />} />
      </Routes>
=======
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
        </Routes>
      </div>
      <NotificationBell />
>>>>>>> .merge_file_przKdn
    </Router>
  );
};

export default App;