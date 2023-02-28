import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import From from "../components/From";
import Illustration from "../components/Illustration";
import TextInput from "../components/TextInput";
import "../styles/Login.css";
const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <From className="login">
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button>
            <span>Submit now</span>
          </Button>
          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </From>
      </div>
    </>
  );
};

export default Login;
