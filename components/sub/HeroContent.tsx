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
      className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-4 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h.auto"
        >
          <span>
            Hello, I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Diogo!{" "}
            </span>
            <motion.div variants={slideInFromTop} className=" py-[8px] mt-5 ">
              <h1 className="text-5xl text-cyan-500">S{textToShow}</h1>
            </motion.div>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 bg-purple-700 hover:bg-purple-900 text-center text-white cursor-pointer rounded-lg max-w-[125px]"
        >
          About Me
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex ml-40 justify-center items-center"
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
