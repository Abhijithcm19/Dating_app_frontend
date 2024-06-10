import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../components/User/form/FormInput";
import Button from "../../components/User/ui/Button";
import { Link } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginProps {
  onCloseModalAndNavigate: () => void;
}

const Login: React.FC<LoginProps> = ({ onCloseModalAndNavigate }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  const validatePassword = (value: string) => {
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }
    return true;
  };

  return (
    <div
      className="bg-neutral-900 p-8 rounded-lg shadow-md max-w-md w-full"
      style={{ width: "1536px" }}
    >
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
          label="Login"
          onClick={handleSubmit(onSubmit)}
          className="mt-4"
        />
        <div className="text-sm text-center text-gray-400">
          <span>Don't have an account? </span>
          <Link
            to="/signup"
            className="text-indigo-500"
            onClick={onCloseModalAndNavigate}
          >
            Sign Up
          </Link>{" "}
        </div>
      </form>
      <div className="mt-4">
        <div className="my-4 border-b border-gray-300 mx-6"></div>
        <div className="flex justify-center mt-2">
          <button className="bg-red-600 text-white px-4 py-2 rounded mr-4 hover:bg-red-700 transition duration-300">
            <i className="fab fa-google mr-2"></i> Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
