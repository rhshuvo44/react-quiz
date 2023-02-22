import React from "react";
import "../styles/From.css";
const From = ({ children, className, ...rest }) => {
  return (
    <form className={`${className} form`} {...rest}>
      {children}
    </form>
  );
};

export default From;
