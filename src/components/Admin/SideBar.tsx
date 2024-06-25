import React from "react";
import { FaHome, FaUserFriends, FaUserShield } from "react-icons/fa";
import { GiKnightBanner } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { SiLegacygames } from "react-icons/si";

interface SidebarProps {
  activeTab: string;
  handleTabClick: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, handleTabClick }) => {
  return (
    <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
      <div className="my-4 flex items-center">
        <FaUserShield className="w-8 h-8 text-white mr-2" />{" "}
        <h1 className="text-2xl text-white font-bold">Admin Panel</h1>
      </div>
      <hr className="border-gray-600" />
      <ul className="mt-4 text-white font-bold">
        <li
          className={`mb-4 rounded-3xl py-2 ${
            activeTab === "dashboard"
              ? "bg-blue-500"
              : "hover:bg-blue-500 hover:shadow"
          }`}
          onClick={() => handleTabClick("dashboard")}
        >
          <div className="flex items-center px-3">
            <FaHome className="w-6 h-6 mr-2" />
            Dashboard
          </div>
        </li>
        <li
          className={`mb-4 rounded-3xl py-2 ${
            activeTab === "staff"
              ? "bg-blue-500"
              : "hover:bg-blue-500 hover:shadow"
          }`}
          onClick={() => handleTabClick("staff")}
        >
          <div className="flex items-center px-3">
            <FaUserFriends className="w-6 h-6 mr-2" />
            Staff Management
          </div>
        </li>
        <li
          className={`mb-4 rounded-3xl py-2 ${
            activeTab === "users"
              ? "bg-blue-500"
              : "hover:bg-blue-500 hover:shadow"
          }`}
          onClick={() => handleTabClick("users")}
        >
          <div className="flex items-center px-3">
            <FaUserShield className="w-6 h-6 mr-2" />
            User Management
          </div>
        </li>
        <li
          className={`mb-4 rounded-3xl py-2 ${
            activeTab === "banner"
              ? "bg-blue-500"
              : "hover:bg-blue-500 hover:shadow"
          }`}
          onClick={() => handleTabClick("banner")}
        >
          <div className="flex items-center px-3">
            <GiKnightBanner className="w-6 h-6 mr-2" />
            Banner Management
          </div>
        </li>
        <li
          className={`mb-4 rounded-3xl py-2 ${
            activeTab === "subscription"
              ? "bg-blue-500"
              : "hover:bg-blue-500 hover:shadow"
          }`}
          onClick={() => handleTabClick("subscription")}
        >
          <div className="flex items-center px-3">
            <RiMoneyDollarCircleLine className="w-6 h-6 mr-2" />
            Subscription Management
          </div>
        </li>
        <li
          className={`mb-4 rounded-3xl py-2 ${
            activeTab === "interests"
              ? "bg-blue-500"
              : "hover:bg-blue-500 hover:shadow"
          }`}
          onClick={() => handleTabClick("interests")}
        >
          <div className="flex items-center px-3">
            <SiLegacygames className="w-6 h-6 mr-2" />
            Complaint Management
          </div>
        </li>
      </ul>
      <div className="absolute bottom-4 left-4 text-xs text-gray-400">
        © 2024 Admin Dashboard
      </div>
    </div>
  );
};

export default Sidebar;
