import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/user.context";
import { TodoProvider } from "./context/todo.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
