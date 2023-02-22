import React from "react";
import "../styles/Account.css";
const Account = () => {
  return (
    <div class="account">
      <span class="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
      {/* <span class="material-icons-outlined" title="Logout">
        {" "}
        logout{" "}
      </span> */}
    </div>
  );
};

export default Account;
