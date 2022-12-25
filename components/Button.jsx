"use client";

import React from "react";

const Button = ({ title, handleClick }) => {
  return (
    <button
      className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 
    group-hover:to-blue-500 focus:outline-none text-secondary-white 
    hover:text-white focus:ring-blue-300 mt-4 bg-red-500'
      onClick={handleClick}
    >
      <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#111827] rounded-md group-hover:bg-opacity-0'>
        {title}
      </span>
    </button>
  );
};

export default Button;
