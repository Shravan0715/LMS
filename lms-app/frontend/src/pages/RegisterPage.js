import React from "react";
import { registerUser } from "../services/api";
import AuthForm from "../components/AuthForm";

const RegisterPage = () => {
  const handleRegister = async (formData) => {
    try {
      await registerUser(formData);
      alert("Registration successful!");
    } catch (error) {
      alert("Registration failed! Try again.");
    }
  };

  return (
    <div>
      {/* ✅ Remove the extra <p> here */}
      <AuthForm onSubmit={handleRegister} isLogin={false} />
    </div>
  );
};

export default RegisterPage;
