import React from "react";
import "./Background.css";
import LoginComponent from "../components/Login/LoginComponent";

const LoginForm: React.FC = () => {
  return (
    <div className="background">
      <LoginComponent />
    </div>
  );
};

export default LoginForm;
