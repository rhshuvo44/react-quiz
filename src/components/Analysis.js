import React from "react";
import "../styles/Analysis.css";
import Question from "./Question";
const Analysis = () => {
  return (
    <div className="analysis">
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Question />
    </div>
  );
};

export default Analysis;
