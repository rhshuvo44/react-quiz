import React from "react";
import Illustration from "../components/Illustration";
import SignupFrom from "../components/SignupFrom";
const Singup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupFrom/>
      </div>
    </>
  );
};

export default Singup;
