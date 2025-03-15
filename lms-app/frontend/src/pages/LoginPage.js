import React from "react";
import { loginUser } from "../services/api";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  const handleLogin = async (formData) => {
    try {
      await loginUser(formData);
      alert("Login successful!");
    } catch (error) {
      alert("Invalid credentials. Try again!");
    }
  };

  return (
    <div>
      {/* ✅ Remove the extra <p> here */}
      <AuthForm onSubmit={handleLogin} isLogin={true} />
    </div>
  );
};

export default LoginPage;
