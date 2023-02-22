import React from "react";
import thum from "../assets/img/nat-9.jpg";
import "../styles/Video.css";
const Video = () => {
  return (
    <a href="quiz.html">
      <div className="video">
        <img src={thum} alt="thum" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className="qmeta">
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
};

export default Video;
