import React from "react";
import thum from "../assets/img/nat-9.jpg";
import "../styles/Video.css";
const Video = ({ title, noq, id }) => {
  return (
    <div className="video">
      <img src={thum} alt={title} />
      <p>{title}</p>
      <div className="qmeta">
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
};

export default Video;
