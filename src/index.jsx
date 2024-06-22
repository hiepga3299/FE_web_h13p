import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./Context/AuthProvider";
import AppRoute from "./Router/AppRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  </React.StrictMode>
);
