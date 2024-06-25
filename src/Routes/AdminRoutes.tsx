import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/Admin/AdminLogin";
import Dashboard from "../pages/Admin/dashboard/Dashboard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
