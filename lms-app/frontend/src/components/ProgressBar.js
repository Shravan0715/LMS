import React from 'react';
import './ProgressBar.css';

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <h3 className="progress-title">Course Progress</h3>
      <div className="progress-wrapper">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        <span className="progress-label">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;