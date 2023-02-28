import React from "react";
import "../styles/Button.css";
const Button = ({ className, children }) => {
  return <button className={`button ${className}`}>{children}</button>;
};

export default Button;
