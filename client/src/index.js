import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./components/index.css";
import App from "./components/app/App.js";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // Ensures that the firebase connection/instance only happens once
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
