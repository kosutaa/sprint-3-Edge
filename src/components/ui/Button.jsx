import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-burnt-pink text-white font-bold py-2 px-6 rounded-lg 
        hover:bg-opacity-80 transition-all duration-300 ease-in-out
        transform hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-plum-purple focus:ring-opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;