// This file is the starting point of your entire React app

import React from "react";
import ReactDOM from "react-dom/client";

// This enables page navigation without reloading
import { BrowserRouter } from "react-router-dom";

// Import your main App component
import App from "./App.jsx";

// This connects React to your HTML (index.html -> div id="root")
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
