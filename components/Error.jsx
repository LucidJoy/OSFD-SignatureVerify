import React from "react";

const Error = ({ result }) => {
  return (
    <p className='flex flex-col items-center justify-between p-[16px] bg-[#ffd6d6] text-[#ff4e4e] rounded-2xl min-w-[50%] mt-6 font-semibold'>
      {result}
    </p>
  );
};

export default Error;
