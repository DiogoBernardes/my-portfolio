import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col lg:flex-col items-center justify-center gap-3 max-w-screen-xl h-auto relative lg:w-5/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none px-5 bg-transparent mx-auto z-[20]"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-14 text-center w-full">
        Who am I?
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/5 flex justify-center lg:justify-start mr-5">
          <div className="rounded-full h-[200px] w-[200px] overflow-hidden">
            <img
              src="/profile1.jpeg"
              alt="Profile Picture"
              className="object-cover object-center h-full w-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-4/5 p-4 md:p-12 text-center lg:text-left">
          <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-white">
            Diogo Bernardes
          </h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-purple-500 opacity-25"></div>
          <p className="pt-4 text-base text-white font-semibold flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-cyan-500 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z" />
            </svg>{" "}
            04/06/2000
          </p>
          <p className="pt-2 text-white text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-cyan-500 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
            </svg>{" "}
            Vila Verde, Braga, Portugal
          </p>
          <p className="pt-8 text-sm gap-2  text-white">
            Hi guys! My name is Diogo Bernardes, I&apos;m 23 years old and
            I&apos;m about to finish my degree in Computer Engineering at the
            Polytechnic Institute of Viana do Castelo. My path began with a
            CTeSP in Computer Systems Programming Technician, a course that gave
            me some foundations and served as a springboard for my remaining
            academic career.
            <br></br>
            <br></br>I&apos;m a person who likes to embrace challenges and
            absorb new knowledge. I consider myself to be a flexible,
            communicative and resilient person who enjoys working as part of a
            team, always looking for new challenges and opportunities that will
            allow me to grow.
            <br></br>
            <br></br>As I&apos;m about to graduate, I&apos;m looking for a
            challenging position that promotes professional development and
            personal growth, where I can make a significant contribution and
            continue to actively learn.
          </p>

          <div className="pt-12 pb-8">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-2 px-4 rounded-full">
              <a href="#contacts">Contact Me </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
