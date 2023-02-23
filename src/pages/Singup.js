import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import From from "../components/From";
import Illustration from "../components/Illustration";
import TextInput from "../components/TextInput";
import "../styles/Signup.css";
const Singup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration />
        <From className="signup">
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms & Conditions" />
          <Button>
            <span>Submit now</span>
          </Button>
          <div class="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </From>
      </div>
    </>
  );
};

export default Singup;
