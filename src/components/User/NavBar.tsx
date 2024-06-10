import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTimes, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Login from "../../pages/User/Login";

const NavBar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const closeLoginModalAndNavigate = () => {
    setIsLoginModalOpen(false);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faHeart} className="mr-2" size="2x" />{" "}
          <h1 className="text-xl font-semibold">LoveLink</h1>
          <div className="hidden md:flex ml-6">
            <Link
              to="#"
              className="mr-4 text-white hover:text-gray-400 transition duration-300"
              onClick={closeLoginModalAndNavigate}
            >
              Subscription
            </Link>
            <Link
              to="#"
              className="mr-4 text-white hover:text-gray-400 transition duration-300"
              onClick={closeLoginModalAndNavigate}
            >
              Learn
            </Link>
            <Link
              to="#"
              className="mr-4 text-white hover:text-gray-400 transition duration-300"
              onClick={closeLoginModalAndNavigate}
            >
              Support
            </Link>
          </div>
        </div>

        <div className="flex items-center relative">
          <div className="hidden md:flex items-center">
            <FontAwesomeIcon icon={faGlobe} className="text-white" />
            <select className="bg-transparent text-white px-2 py-1 rounded focus:outline-none appearance-none ">
              <option className="font-bold">English</option>
              <option className="font-bold">Spanish</option>
            </select>
          </div>
          <button
            className="ml-4 bg-white text-black px-8 py-1 rounded-3xl hover:bg-gray-400 font-bold md:hidden"
            onClick={toggleMobileNav}
          >
            Menu
          </button>
        </div>
      </div>

      {isMobileNavOpen && (
        <div
          className="bg-black fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center"
          onClick={closeMobileNav}
        >
          <div className="container mx-auto">
            <ul className="text-white text-center">
              <li className="py-4">
                <Link to="#" onClick={closeLoginModalAndNavigate}>
                  Subscription
                </Link>
              </li>
              <li className="py-4">
                <Link to="#" onClick={closeLoginModalAndNavigate}>
                  Learn
                </Link>
              </li>
              <li className="py-4">
                <Link to="#" onClick={closeLoginModalAndNavigate}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {isLoginModalOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="z-50 rounded-lg shadow-md max-w-md relative">
            <Login onCloseModalAndNavigate={closeLoginModalAndNavigate} />
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={toggleLoginModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
