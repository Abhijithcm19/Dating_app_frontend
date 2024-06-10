import React from "react";

import { Controller } from "react-hook-form";

interface FormSelectProps {
  label: string;
  name: string;
  options: string[];
  control: any;
  rules?: Record<string, any>;
  errors: any;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  options,
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
            <select
              {...field}
              id={name}
              className="mt-2 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-indigo-500 bg-black text-white"
            >
              <option value="">Select</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
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

export default FormSelect;
