import Contacts from "@/components/main/Contacts";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import AboutMe from "@/components/main/AboutMe";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <div className="flex flex-col">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    </main>
  );
}
