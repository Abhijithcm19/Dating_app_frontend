// Dashboard.tsx
import React, { useState } from "react";
import Sidebar from "../../../components/Admin/SideBar";
import Navbar from "../../../components/Admin/NavBar";
import AdminHome from "./AdminHome";
import StaffManagement from "./StaffManagement";
import UserManagement from "./UserManagement";
import Banner from "./Banner";
import Subscription from "./Subscription";
import IntrestManagement from "./IntrestManagement";
const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="flex-1 flex flex-col ml-64">
        <Navbar />
        <div className="">
          {activeTab === "dashboard" && <AdminHome />}
          {activeTab === "staff" && <StaffManagement />}
          {activeTab === "users" && <UserManagement />}
          {activeTab === "banner" && <Banner />}
          {activeTab === "subscription" && <Subscription />}
          {activeTab === "interests" && <IntrestManagement />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
