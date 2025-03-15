import React, { useEffect, useState } from "react";
import axios from "../services/api";
import "./../styles/TrackingPage.css";

const TrackingPage = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    axios.get("/api/tracking/user123").then((res) => setProgress(res.data));
  }, []);

  return (
    <div className="tracking-container">
      <h2>Learning Progress</h2>
      <p>Completed Courses: {progress.completedCourses?.length || 0}</p>
      <h3>Quiz Scores</h3>
      {progress.quizScores?.map((quiz, index) => (
        <p key={index}>
          {quiz.courseId}: {quiz.score}%
        </p>
      ))}
    </div>
  );
};

export default TrackingPage;
