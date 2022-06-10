import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./Context/Task-Context/Task-Context";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TaskProvider>
        <App />
      </TaskProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
