import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./Context/Task/Task-Context";
import { PomodoroProvider } from "./Context/Pomodoro/Pomodoro-Context";
import { AuthProvider } from "./Context/Auth/Auth-Context";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          <PomodoroProvider>
            <App />
          </PomodoroProvider>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
