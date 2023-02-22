import React from "react";

const nav = () => {
  return (
    <nav class="nav">
      <ul>
        <li>
          <a href="index.html" class="brand">
            <img src="./images/logo-bg.png" alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <div class="account">
        <span class="material-icons-outlined" title="Account">
          account_circle
        </span>
        <a href="signup.html">Signup</a>
        <span class="material-icons-outlined" title="Logout">
          {" "}
          logout{" "}
        </span>
      </div>
    </nav>
  );
};

export default nav;
