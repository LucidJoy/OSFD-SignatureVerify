import React from "react";
import Image from "next/image";

import { logoBig, logoSmall } from "../assets";
// import imgLogo from "../assets/logoBig.png";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-around z-10 w-screen fixed p-4 flex-row bg-[#111827] border-b border-[#2D2E36]'>
      <Image src={logoBig} alt='logo' className='w-[130px] h-[58.5px]' />
    </nav>
  );
};

export default Navbar;
