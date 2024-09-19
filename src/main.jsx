/** @format */

import { StrictMode } from "react";
import Dbapp from "../FirebaseConfing/firebaseDb.js";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
