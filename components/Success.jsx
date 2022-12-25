import React from "react";

const Success = ({ result }) => {
  return (
    <p className='flex flex-col items-center justify-between p-[16px] bg-[#F3FAEB] text-[#56b111] rounded-2xl min-w-[50%] mt-6 font-semibold'>
      {result}
    </p>
  );
};

export default Success;
