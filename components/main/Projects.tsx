import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="z-[20]">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-14">
          My Projects
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-14 mt-3">
          <ProjectCard
            src="/Azeite.png"
            title="Management Application"
            description="Application for olive oil management and production developed in Java/Spring."
            link="https://github.com/DiogoBernardes/ProjetoII-Lagar"
          />
          <ProjectCard
            src="/gym-buddy-api.png"
            title="API for Gym Apllication"
            description="API developed in Node, Prisma and PostgreSQL for gym application."
            link="https://github.com/paulovareiro29/gym-buddy-api"
          />
          <ProjectCard
            src="/streamsync.png"
            title="Management Web Application"
            description="Web Application for Managing Movies and Series developed in PHP, HTML, Bootstrap and Javascript."
            link="https://github.com/DiogoBernardes/StreamSync"
          />
          <ProjectCard
            src="/notebook.png"
            title="Data Analysis Notebook/Power BI"
            description="Analysis of city salary data to provide insights into the distribution of public resources."
            link="https://github.com/DiogoBernardes/Notebook-Citywide-Payroll-Data-Fiscal-Year"
          />
        </div>

        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-14 mt-5">
          <ProjectCard
            src="/ttts.png"
            title="Task Time Tracking System"
            description="Task Time Tracking System for freelancers developed in Java."
            link="https://github.com/DiogoBernardes/Prog2"
          />
          <ProjectCard
            src="/tp2-is.png"
            title="RPC Server and XML Parsing"
            description="Conversion of CSV data to XML for storage via containers and a migrator to transfer data, plus APIs for integration."
            link="https://github.com/DiogoBernardes/TP2-IS"
          />
          <ProjectCard
            src="/loa.jpeg"
            title="Lines of Action board game"
            description="Search algorithms and Artificial Intelligence to implement the game modes and the various difficulty levels for the computer."
            link="https://github.com/DiogoBernardes/Notebook-Citywide-Payroll-Data-Fiscal-Year"
          />
          <ProjectCard
            src="/github-cover.jpg"
            title="Other Projects"
            description="To access more projects developed by me, visit my GitHub."
            link="https://github.com/DiogoBernardes"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
