import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover opacity-[0.3]"
      >
        <source src="/background.mp4" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
