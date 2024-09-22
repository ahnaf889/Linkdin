/** @format */

import React from "react";
import Registration from "./Component/RegistrationComponent/Registration.jsx";
import Login from "./Component/LoginComponent/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const App = () => {
  //All page router dome implement
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
