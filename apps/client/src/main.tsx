import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import "./index.css";

const root = document.getElementById("root");
if (!root) throw new Error("failed to find #root in index.html");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
