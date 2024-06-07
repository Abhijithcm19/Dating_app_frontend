import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../components/User/form/FormInput";
import Button from "../../components/User/ui/Button";

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  const validatePassword = (value: string) => {
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }
    return true;
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Sign Up
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Username"
            name="username"
            type="text"
            placeholder="Username"
            control={control}
            rules={{ required: "Username is required" }}
            errors={errors}
          />
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
            label="Sign Up"
            onClick={handleSubmit(onSubmit)}
            className="mt-4"
          />
          <div className="text-sm text-center">
            <span>Already have an account? </span>
            <span className="text-indigo-500">Sign In</span>
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
    </div>
  );
};

export default SignUp;
