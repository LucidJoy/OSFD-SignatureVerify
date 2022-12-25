import { SignMssg, VerifyMssg, Navbar } from "../components";
import { ethers } from "ethers";

const Page = () => (
  <div>
    <Navbar />
    <div className='flex gap-5 p-5'>
      <SignMssg />
      <div className='w-[2px] bg-white opacity-10 mt-[92px]' />
      <VerifyMssg />
    </div>
  </div>
);

export default Page;
