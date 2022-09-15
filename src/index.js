import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavProvider } from "./contexts/NavContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <NavProvider>
        <App />
      </NavProvider>
    </Router>
  </React.StrictMode>
);
