import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTimes, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Login from "../../pages/User/Login";

const NavBar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const closeLoginModalAndNavigate = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="flex justify-between bg-black items-center p-4 text-white">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faHeart} className="mr-2" size="2x" />{" "}
        <h1 className="text-xl font-semibold">LoveLink</h1>
        <div className="ml-6">
          <Link
            to="/premium-plan"
            className="mr-4 text-white hover:text-gray-400 transition duration-300"
            onClick={closeLoginModalAndNavigate}
          >
            Subscription
          </Link>
          <Link
            to="/learn"
            className="mr-4 text-white hover:text-gray-400 transition duration-300"
            onClick={closeLoginModalAndNavigate}
          >
            Learn
          </Link>
          <Link
            to="/support"
            className="mr-4 text-white hover:text-gray-400 transition duration-300"
            onClick={closeLoginModalAndNavigate}
          >
            Support
          </Link>
        </div>
      </div>

      <div className="flex items-center relative">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faGlobe} className="text-white" />
          <select className="bg-transparent text-white px-2 py-1 rounded focus:outline-none appearance-none ">
            <option className="font-bold">English</option>
            <option className="font-bold">Spanish</option>
          </select>
        </div>
        <button
          className="ml-4 bg-white text-black px-8 py-1 rounded-3xl hover:bg-gray-400 font-bold"
          onClick={toggleLoginModal}
        >
          Login
        </button>
      </div>

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
