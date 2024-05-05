import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section
      id="main"
      className="flex flex-col items-center justify-center gap-3 relative overflow-hidden w-full"
    >
      <div className="relative flex flex-col h-screen w-full">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/background.mp4" type="video/webm" />
        </video>
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
