import React from "react";
import Image from "next/image";

import { loader } from "../assets";

const Loader = () => {
  return (
    <div className='fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col'>
      <Image
        src={loader}
        width={100}
        height={100}
        alt='loader'
        className='w-[100px] h-[100px] object-contain'
      />
      <p className='mt-[20px] font-epilogue font-bold text-[20px] text-center text-white'>
        Transaction in progress...
      </p>
    </div>
  );
};

export default Loader;
