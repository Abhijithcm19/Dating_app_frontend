import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/User/LandingPage";
import NavBar from "../components/User/NavBar";
import Footer from "../components/User/Footer";
import PersonalDetails from "../pages/User/PersonalDetails";
import MatchPage from "../pages/User/MatchPage";
import Profile from "../pages/User/Profile";

export const UserRoutes = () => {
  return (
    <div>
      <NavBar /> {/* Display NavBar on all routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};
