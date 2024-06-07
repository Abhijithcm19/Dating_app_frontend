import React from "react";
import { Controller } from "react-hook-form";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  control: any;
  rules?: Record<string, any>;
  errors: any;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  placeholder,
  control,
  rules,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue=""
        render={({ field }) => (
          <div>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              id={name}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-indigo-500"
            />
            {errors[name] && (
              <p className="text-red-500 text-xs mt-1">
                {errors[name].message}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default FormInput;
