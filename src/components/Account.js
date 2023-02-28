import React from "react";
import { Link } from "react-router-dom";
import "../styles/Account.css";
const Account = () => {
  return (
    <div className="account">
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      {/* <span className="material-icons-outlined" title="Logout">
        {" "}
        logout{" "}
      </span> */}
    </div>
  );
};

export default Account;
