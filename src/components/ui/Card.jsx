import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-white shadow-lg rounded-xl p-6
      border-t-4 border-delicate-lilac
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;