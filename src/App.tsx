import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AdminRoutes from "./Routes/AdminRoutes";
import { UserRoutes } from "./Routes/UserRoutes";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
