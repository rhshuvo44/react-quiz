import React from "react";
import "../styles/Button.css";
const Button = ({ className, children }) => {
  return <div className={`button ${className}`}>{children}</div>;
};

export default Button;
