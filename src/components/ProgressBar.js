import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProgressBar.css";
import Button from "./Button";
const ProgressBar = () => {
  return (
    <div class="progressBar">
      <div class="backButton">
        <span class="material-icons-outlined"> arrow_back </span>
      </div>
      <div class="rangeArea">
        <div class="tooltip">24% Cimplete!</div>
        <div class="rangeBody">
          <div class="progress" style={{ width: "20%" }}></div>
        </div>
      </div>
      <Link to="/result">
        <Button className="next">
          <span>Next Question</span>
          <span class="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
};

export default ProgressBar;
