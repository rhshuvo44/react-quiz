import React from "react";
import "../styles/Nav.css";
import Account from "./Account";

const nav = () => {
  return (
    <nav class="nav">
      <ul>
        <li>
          <a href="index.html" class="brand">
            {/* <img src="./images/logo-bg.png" alt="Learn with Sumit Logo" /> */}
            <h3>Quiz App</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default nav;
