"use client";
import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full bg-[#03001417] shadow-lg md:bg-transparent md:shadow-none fixed top-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-8 mt-4 relative">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/code.png"
            alt="logo"
            width={30}
            height={30}
            className={`cursor-pointer hover:animate-slowspin ${
              menuOpen ? "hidden" : "block"
            }`}
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            Portfolio
          </span>
        </a>

        <div className="hidden md:flex space-x-6 items-center">
          <a href="#about-me" className="text-gray-200 hover:text-white">
            About Me
          </a>
          <a href="#skills" className="text-gray-200 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="text-gray-200 hover:text-white">
            Projects
          </a>
          <a href="#about-me" className="text-gray-200 hover:text-white">
            Contacts
          </a>
        </div>
        <div className="hidden md:flex gap-5">
          {Socials.map((social) => (
            <a href={social.link} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={26}
                height={24}
                className="cursor-pointer hover:opacity-80"
              />
            </a>
          ))}
        </div>

        <div className="md:hidden">
          {!menuOpen && (
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
          {menuOpen && (
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <div
          className={`absolute right-0 top-[35px] md:hidden ${
            menuOpen ? "block" : "hidden"
          } h-screen w-2/3  md:w-2/3 bg-gray-900 bg-opacity-80 rounded-lg`}
        >
          <div className="flex flex-row items-center justify-center p-12 ">
            {" "}
            <Image
              src="/code.png"
              alt="logo"
              width={30}
              height={30}
              className={`cursor-pointer ${menuOpen ? "block" : "hidden"}`}
            />
            <p className="ml-5 text-xl text-white">Portfolio</p>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-20 px-8">
            <a
              href="#about-me"
              className="text-gray-200 hover:text-white font-semibold"
            >
              About Me
            </a>
            <a
              href="#about-me"
              className="text-gray-200 hover:text-white font-semibold"
            >
              Skills
            </a>
            <a
              href="#about-me"
              className="text-gray-200 hover:text-white font-semibold"
            >
              Projects
            </a>
            <a
              href="#about-me"
              className="text-gray-200 hover:text-white font-semibold"
            >
              Contacts
            </a>
            <div className="flex mt-[0px] py-40 space-x-5">
              {Socials.map((social) => (
                <a href={social.link} key={social.name}>
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={26}
                    height={24}
                    className="cursor-pointer hover:opacity-80"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
