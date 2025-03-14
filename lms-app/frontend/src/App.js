import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForumPage from "./pages/ForumPage";
import TrackingPage from "./pages/TrackingPage";
import NotificationBell from "./components/NotificationBell";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
        </Routes>
      </div>
      <NotificationBell />
    </Router>
  );
};

export default App;
