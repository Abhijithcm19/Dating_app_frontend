import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/User/Signup";
import Login from "../pages/User/Login";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
