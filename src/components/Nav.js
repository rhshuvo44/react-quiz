import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import Account from "./Account";

const nav = () => {
  return (
    <nav class="nav">
      <ul>
        <li>
          <Link to="/" class="brand">
            <h3>Quiz App</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default nav;
