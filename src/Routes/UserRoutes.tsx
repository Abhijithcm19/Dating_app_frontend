import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/User/LandingPage";
import NavBar from "../components/User/NavBar";
import Footer from "../components/User/Footer";
import PersonalDetails from "../pages/User/PersonalDetails";
import MatchPage from "../pages/User/MatchPage";
import Profile from "../pages/User/Profile";
import Otp from "../pages/User/Otp";
import ForgotPassword from "../pages/User/ForgotPassword";
import Support from "../pages/User/Support";
import Subscription from "../pages/User/PremiumPlan";
import Learn from "../pages/User/Learn";

export const UserRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/support" element={<Support />} />
        <Route path="/premium-plan" element={<Subscription />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
      <Footer />
    </div>
  );
};
