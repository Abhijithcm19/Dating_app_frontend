import React, { useState } from "react";
import SignUp from "./Signup";

const LandingPage = () => {
  const imageSrc =
    "https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp";

  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleCreateAccountClick = () => {
    setShowSignUpModal(true);
  };

  const handleCloseModal = () => {
    setShowSignUpModal(false);
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute text-center">
        <h1
          className="text-white text-8xl font-bold mb-12"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
        >
          Discover love. Begin your story.
        </h1>
        <button
          className="py-2 px-4 rounded-3xl font-bold"
          style={{
            background: "linear-gradient(45deg, #ED1E79, #EF4444)",
            color: "#FFF",
            fontSize: "1.5rem",
          }}
          onClick={handleCreateAccountClick}
        >
          Create Account
        </button>
      </div>

      {showSignUpModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <SignUp onCloseModal={handleCloseModal} />{" "}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
