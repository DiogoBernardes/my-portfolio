"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TextAnimation,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
  const textToShow = TextAnimation();

  return (
    <motion.div
      initial="Hidden"
      animate="Visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-20 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-4 justify-center m-auto text-start mt-20 lg:max-w-[60%]">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[650px] w-auto h-auto"
        >
          <span>
            Hello, I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Diogo!{" "}
            </span>
            <motion.div variants={slideInFromTop} className=" py-[8px] mt-5 ">
              <h3 className="text-2xl md:text-5xl lg:text-4xl text-cyan-500">
                J{textToShow}
              </h3>
            </motion.div>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg lg:text-xl text-gray-400 my-5 max-w-[600px]"
        >
          As a Junior Software Developer, I like to look for new challenges so
          that I can expand my skills and knowledge, thus getting out of my
          comfort zone and allowing me to grow both personally and
          professionally.
        </motion.p>

        <motion.a
          href="/CV.pdf"
          download="CV-Diogo Bernardes"
          variants={slideInFromLeft(1)}
          className="py-2 bg-purple-600 hover:bg-purple-900 text-center text-white cursor-pointer rounded-lg max-w-[160px] flex justify-center items-center"
        >
          <span className="mr-2">Download CV</span>
          <span>
            <Image src="/download.png" alt="download" width={25} height={25} />
          </span>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden lg:flex w-full h-full justify-center items-center lg:w-[40%] lg:ml-20"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
