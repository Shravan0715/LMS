import React from 'react';
import AssignmentForm from '../components/AssignmentForm';
import './AssignmentPage.css';

function AssignmentPage() {
  return (
    <div className="assignment-page">
      <h2 className="assignment-title">Submit Your Assignment</h2>
      <AssignmentForm />
    </div>
  );
}

export default AssignmentPage;