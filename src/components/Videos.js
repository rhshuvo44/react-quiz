import React from "react";
import { Link } from "react-router-dom";
import "../styles/Videos.css";
import Video from "./Video";
const Videos = () => {
  return (
    <div className="videos">
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
    </div>
  );
};

export default Videos;
