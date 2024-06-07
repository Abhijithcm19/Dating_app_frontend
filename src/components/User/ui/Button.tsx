// Button.tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
