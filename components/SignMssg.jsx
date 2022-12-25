"use client";

import React, { useState, useRef } from "react";
import { ethers } from "ethers";
import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";
import Button from "./Button";
import { TypingText } from "./CustomTexts";
import Loader from "./Loader";

const signMessage = async (message) => {
  try {
    console.log({ message });
    if (!window.ethereum) throw new Error("No crypto wallet found.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();

    return {
      message,
      signature,
      address,
    };
  } catch (error) {
    console.log(error.message);
  }
};

const SignMssg = () => {
  const [signatures, setSignatures] = useState([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSign = async (e) => {
    setIsLoading(true);
    const sig = await signMessage(text);
    setIsLoading(false);

    if (sig) setSignatures([...signatures, sig]);
    console.log(sig);
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='flex flex-col items-center justify-start flex-1 mt-[92px]'
    >
      {isLoading && <Loader />}

      <motion.label
        htmlFor='message'
        className='flex mb-4 font-bold text-lg items-center justify-center text-white'
      >
        <TypingText title='Sign Message' textStyles='text-center' />
      </motion.label>

      <textarea
        id='message'
        rows={4}
        className='block p-3 w-full text-sm text-secondary-white border-none bg-[#2c2f32] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 max-w-[800px]'
        placeholder='Write your thoughts here...'
        onChange={(e) => setText(e.target.value)}
      />

      <Button title='Sign Message' handleClick={handleSign} />

      {signatures.length > 0 &&
        signatures.map((sig, idx) => {
          return (
            <div className='p-3 flex justify-between flex-col w-11/12 shadow-[0_0px_50px_rgba(118,_67,_243,_0.3)] rounded-xl mt-[25px] pb-0 mb-8'>
              <div className='flex justify-center'>
                <p className='text-white font-semibold text-[18px]'>
                  Transaction: {idx + 1}
                </p>
              </div>

              <div className='flex flex-col gap-3'>
                <p className='text-white'>
                  <span className='text-secondary-white'> Message: </span>{" "}
                  {sig.message}
                </p>
                <p className='text-white'>
                  <span className='text-secondary-white'> Signer:</span>{" "}
                  {sig.address}
                </p>

                {/* <input
                  type='text'
                  className='text-secondary-white border-none bg-[#2c2f32] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-[800px]'
                  readOnly
                  value={sig.signature}
                /> */}
                <textarea
                  readOnly
                  rows={4}
                  value={sig.signature}
                  className='block p-3 w-full text-sm text-secondary-white border-none bg-[#2c2f32] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-6 max-w-[800px] resize-none'
                />
              </div>
            </div>
          );
        })}
    </motion.div>
  );
};

export default SignMssg;
