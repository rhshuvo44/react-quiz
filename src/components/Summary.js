import React from "react";
import img from "../assets/img/success.png";
const Summary = () => {
  return (
    <div class="summary">
      <div class="point">
        {/* <!-- progress bar will be placed here --> */}
        <p class="score">
          Your score is <br />5 out of 10
        </p>
      </div>

      <div class="badge">
        <img src={img} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
