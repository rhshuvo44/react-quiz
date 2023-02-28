import React from "react";
import img from "../assets/img/success.png";
import "../styles/Summary.css";
const Summary = () => {
  return (
    <div className="summary">
      <div className="point">
        {/* <!-- progress bar will be placed here --> */}
        <p className="score">
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className="badge">
        <img src={img} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
