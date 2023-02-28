import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvaider from "./contexts/AuthProvaider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvaider>
        <App />
      </AuthProvaider>
    </BrowserRouter>
  </React.StrictMode>
);
