import React from "react";
import Image from "next/image";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="flex flex-col items-center gap-3 min-h-screen relative overflow-hidden z-[20]"
    >
      <div className="w-full h-auto flex justify-center mt-10 md:mt-40">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-14">
          Contacts
        </h1>
      </div>

      <div className="container flex flex-col md:flex-row lg:w-[900px] px-2 justify-center text-white ">
        <div className="md:w-1/3">
          <div className="flex flex-col items-center border border-purple-600 gap-1 ">
            <Image
              src="/linkedin.png"
              alt="linkedin"
              height={29}
              width={29}
              className="mt-3"
            />
            <h3>
              <a
                href="https://www.linkedin.com/in/diogo-bernardes/"
                className="hover:underline text-cyan-500"
              >
                diogo-bernardes
              </a>
            </h3>
            <p className="mb-4">LinkedIn</p>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="flex flex-col h-full items-center border border-purple-600 gap-1">
            <Image
              src="/gitwhite.png"
              alt="github"
              height={30}
              width={30}
              className="mt-3"
            />
            <h3>
              <a
                href="https://github.com/DiogoBernardes"
                className="hover:underline text-cyan-500"
              >
                DiogoBernardes
              </a>
            </h3>
            <p className="mb-2">GitHub</p>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="flex flex-col h-full items-center border border-purple-600 gap-1">
            <Image
              src="/email.png"
              alt="email"
              height={35}
              width={35}
              className="mt-2"
            />
            <h3>
              <a
                href="mailto:diogobernardess00@gmail.com"
                className="hover:underline text-cyan-500"
              >
                DiogoBernardess00@gmail.com
              </a>
            </h3>
            <p className="mb-2">Email</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
