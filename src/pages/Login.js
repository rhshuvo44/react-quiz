import React from "react";
import Illustration from "../components/Illustration";
import LoginFrom from "../components/LoginFrom";
import "../styles/Login.css";
const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginFrom />
      </div>
    </>
  );
};

export default Login;
