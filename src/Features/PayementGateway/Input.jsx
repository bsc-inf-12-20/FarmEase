import React from 'react';

export const Input = ({ 
  className = '', 
  type = 'text',
  disabled = false,
  ...props 
}) => {
  return (
    <input
      type={type}
      className={`
        w-full
        px-3
        py-2
        border
        border-gray-300
        rounded-md
        shadow-sm
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:border-blue-500
        disabled:bg-gray-100
        disabled:cursor-not-allowed
        ${className}
      `}
      disabled={disabled}
      {...props}
    />
  );
};