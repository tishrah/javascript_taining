import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-indigo-900 text-white py-2 px-6 my-10 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
