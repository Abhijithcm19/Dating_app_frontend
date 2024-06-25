import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../components/User/form/FormInput";
import Button from "../../components/User/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../services/UserApi";
import { validatePassword } from "../../utils/auth";
import {
  signInStart,
  signoutSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
interface LoginFormData {
  email: string;
  password: string;
}

interface LoginProps {
  onCloseModalAndNavigate: () => void;
}

const Login: React.FC<LoginProps> = ({ onCloseModalAndNavigate }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      const response = await login(data);
      toast.success("Login successful!");

      setTimeout(() => {
        setLoading(false);
        onCloseModalAndNavigate();
        navigate("/match");
      }, 1000);
    } catch (error) {
      toast.error(error.message || "Login failed!");
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-neutral-900 p-8 rounded-lg shadow-md max-w-md w-full"
      style={{ width: "1536px" }}
    >
      <ToastContainer />
      <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">
        Login
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="name@company.com"
          control={control}
          rules={{ required: "Email is required" }}
          errors={errors}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          control={control}
          rules={{
            validate: validatePassword,
            required: "Password is required",
          }}
          errors={errors}
        />
        <Button
          label={loading ? "Loading..." : "Login"}
          onClick={handleSubmit(onSubmit)}
          className="mt-4"
          disabled={loading}
        />
        <div className="text-sm text-center text-gray-400">
          <span>Don't have an account? </span>
          <Link
            to="/signup"
            className="text-indigo-500"
            onClick={onCloseModalAndNavigate}
          >
            Sign Up
          </Link>
        </div>
      </form>
      <div className="mt-4">
        <div className="my-4 border-b border-gray-300 mx-6"></div>
        <div className="flex justify-center mt-2">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded mr-4 hover:bg-red-700 transition duration-300"
            disabled={loading}
          >
            <i className="fab fa-google mr-2"></i> Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
