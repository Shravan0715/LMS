import React, { useState } from 'react';
import './QuizForm.css';
import { createQuiz } from '../services/api';

function QuizForm() {
  const [title, setTitle] = useState('');
  const [courseId, setCourseId] = useState('');
  const [questions, setQuestions] = useState([{ questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]);

  const addQuestion = () => {
    setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === 'options') {
      newQuestions[index].options[value.index] = value.text;
    } else {
      newQuestions[index][field] = value;
    }
    setQuestions(newQuestions);
  };

  const handleSubmit = async () => {
    try {
      await createQuiz({ title, courseId, questions });
      alert('Quiz created successfully!');
      setTitle('');
      setCourseId('');
      setQuestions([{ questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]);
    } catch (error) {
      alert('Error creating quiz');
    }
  };

  return (
    <div className="quiz-form">
      <h3 className="form-title">Create a New Quiz</h3>
      <input
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        className="form-input"
      />
      <div className="questions-list">
        {questions.map((q, i) => (
          <div className="question-block" key={i}>
            <input
              type="text"
              placeholder="Question Text"
              value={q.questionText}
              onChange={(e) => handleQuestionChange(i, 'questionText', e.target.value)}
              className="form-input"
            />
            {q.options.map((opt, j) => (
              <input
                key={j}
                type="text"
                placeholder={`Option ${j + 1}`}
                value={opt}
                onChange={(e) => handleQuestionChange(i, 'options', { index: j, text: e.target.value })}
                className="form-input option-input"
              />
            ))}
            <select
              value={q.correctAnswer}
              onChange={(e) => handleQuestionChange(i, 'correctAnswer', parseInt(e.target.value))}
              className="form-select"
            >
              {q.options.map((_, j) => (
                <option key={j} value={j}>Option {j + 1}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button className="add-btn" onClick={addQuestion}>Add Question</button>
      <button className="submit-btn" onClick={handleSubmit}>Create Quiz</button>
    </div>
  );
}

export default QuizForm;