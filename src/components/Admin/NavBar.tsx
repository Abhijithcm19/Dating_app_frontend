import React from "react";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="bg-gray-800 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center text-xl">
        <FaBars className="text-white cursor-pointer" />
      </div>
      <div className="flex items-center gap-x-5">
        <div className="text-white">
          <FaBell className="w-6 h-6" />
        </div>
        <div className="relative">
          <button className="text-white group">
            <FaUserCircle className="w-6 h-6 mt-1" />
            <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0">
              <ul className="py-2 text-sm text-gray-950">
                <li>
                  <a href="#">Log Out</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
