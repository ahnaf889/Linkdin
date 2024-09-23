/** @format */

import { StrictMode } from "react";
import Dbapp from "./FirebaseConfing/firebaseDb.js";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>
);
