import React, { useState } from 'react';
import './AssignmentForm.css';
import { submitAssignment } from '../services/api';

function AssignmentForm() {
  const [file, setFile] = useState(null);
  const assignmentId = '1'; // Replace with dynamic value later

  const handleSubmit = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }
    try {
      const fileUrl = URL.createObjectURL(file); // Placeholder; implement real upload later
      await submitAssignment({ assignmentId, fileUrl });
      alert('Assignment submitted successfully!');
      setFile(null);
    } catch (error) {
      alert('Error submitting assignment');
    }
  };

  return (
    <div className="assignment-form">
      <input
        type="file"
        className="file-input"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="submit-btn" onClick={handleSubmit}>Submit Assignment</button>
    </div>
  );
}

export default AssignmentForm;