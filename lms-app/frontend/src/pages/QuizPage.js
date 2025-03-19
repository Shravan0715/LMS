import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './QuizPage.css';
import { getQuiz, submitQuiz } from '../services/api';

function QuizPage() {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await getQuiz(quizId);
        setQuiz(response.data);
        setAnswers(new Array(response.data.questions.length).fill(null));
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };
    fetchQuiz();
  }, [quizId]);

  const handleSubmit = async () => {
    try {
      const response = await submitQuiz({ quizId, answers });
      alert(`Score: ${response.data.score}/${response.data.total}`);
    } catch (error) {
      alert('Error submitting quiz');
    }
  };

  if (!quiz) return <p className="loading">Loading...</p>;

  return (
    <div className="quiz-page">
      <h2 className="quiz-title">{quiz.title}</h2>
      <div className="questions-container">
        {quiz.questions.map((q, i) => (
          <div className="question-card" key={i}>
            <p className="question-text">{q.question_text}</p>
            <div className="options">
              {q.options.map((opt, j) => (
                <label className="option-label" key={j}>
                  <input
                    type="radio"
                    name={`q${i}`}
                    checked={answers[i] === j}
                    onChange={() => setAnswers([...answers.slice(0, i), j, ...answers.slice(i + 1)])}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="submit-btn" onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
}

export default QuizPage;