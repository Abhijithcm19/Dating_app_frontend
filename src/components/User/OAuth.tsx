import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { google } from "../../services/UserApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const OAuth: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const googleUserData = {
        name: resultsFromGoogle.user.displayName || "",
        email: resultsFromGoogle.user.email || "",
        googlePhotoUrl: resultsFromGoogle.user.photoURL || "",
      };
      const data = await google(googleUserData);
      dispatch(signInSuccess(data));
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/personal-details");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center mt-2">
      <ToastContainer />
      <button
        onClick={handleGoogleClick}
        className="bg-red-600 text-white px-4 py-2 rounded mr-4 hover:bg-red-700 transition duration-300"
      >
        <AiFillGoogleCircle className="inline-block mr-2" /> Login With Google
      </button>
    </div>
  );
};

export default OAuth;
