import React from "react";
import "../styles/Button.css";
const Button = ({ children }) => {
  return (
    <div class="button">
      <span>{children}</span>
    </div>
  );
};

export default Button;
