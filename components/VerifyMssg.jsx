"use client";

import React, { useState } from "react";
import { ethers } from "ethers";
import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";
import Button from "./Button";
import { TypingText } from "./CustomTexts";
import Loader from "./Loader";
import { Success, Error } from "./";

const verifyMessage = async ({ message, address, signature }) => {
  try {
    const signerAddr = await ethers.utils.verifyMessage(message, signature);
    if (signerAddr !== address) {
      return false;
    }

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const VerifyMssg = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  const [signerAddr, setSignerAddr] = useState("");
  const [isSuccess, setIsSuccess] = useState("");

  const handleVerify = async () => {
    setIsLoading(true);
    let isValid = await verifyMessage({
      message: message,
      address: signerAddr,
      signature: signature,
    });
    setIsLoading(false);
    console.log("isValid => ", isValid);

    if (isValid) setIsSuccess("true");
    else setIsSuccess("false");
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
        <TypingText title='Verify Signature' textStyles='text-center' />
      </motion.label>

      <textarea
        id='message'
        rows={4}
        className='block p-3 w-full text-sm text-secondary-white border-none bg-[#2c2f32] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-6 max-w-[800px]'
        placeholder='Message'
        onChange={(e) => setMessage(e.target.value)}
      />

      <textarea
        id='message'
        rows={4}
        className='block p-3 w-full text-sm text-secondary-white border-none bg-[#2c2f32] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-6 max-w-[800px]'
        placeholder='Signature'
        onChange={(e) => setSignature(e.target.value)}
      />

      <input
        type='text'
        className='text-secondary-white border-none bg-[#2c2f32] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-[800px]'
        placeholder='Signer address'
        onChange={(e) => setSignerAddr(e.target.value)}
      />

      <Button title='Verify Signature' handleClick={handleVerify} />

      {isSuccess === "true" && <Success result='Valid Signature' />}
      {isSuccess === "false" && <Error result='Invalid Signature' />}
    </motion.div>
  );
};

export default VerifyMssg;
