import React from "react";
import "./Background.css";
import SignupComponent from "../components/Signup/SignupComponent";

const SignupForm: React.FC = () => {
  return (
    <div className="background">
      <SignupComponent />
    </div>
  );
};

export default SignupForm;
