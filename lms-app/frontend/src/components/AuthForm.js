import React, { useState } from "react";
import "../styles/AuthForm.css"; 

const AuthForm = ({ onSubmit, isLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isHuman, setIsHuman] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setIsHuman(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && !isHuman) {
      alert("Please verify that you are not a robot.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {!isLogin && (
            <label className="auth-checkbox">
              <input type="checkbox" checked={isHuman} onChange={handleCheckboxChange} />
              I am not a robot
            </label>
          )}

          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>

        <p className="auth-link">
          {isLogin ? (
            <>New user? <a href="/register">Register here</a></>
          ) : (
            <>Already have an account? <a href="/login">Login here</a></>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
