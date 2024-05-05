import {
  Backend_skill,
  Frontend_skill,
  frameworks,
  database,
  IDES,
  Analysis,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-auto relative overflow-hidden "
    >
      <SkillText />
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-wrap justify-center items-center mt-2 gap-5">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width} // Largura original
              height={image.height} // Altura original
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center mt-2 gap-5">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width} // Largura original
              height={image.height} // Altura original
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center mt-2 gap-5">
          {frameworks.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width} // Largura original
              height={image.height} // Altura original
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center mt-2 gap-5">
          {database.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width} // Largura original
              height={image.height} // Altura original
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center mt-2 gap-5">
          {IDES.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width} // Largura original
              height={image.height} // Altura original
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center mt-2 gap-5">
          {Analysis.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width} // Largura original
              height={image.height} // Altura original
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
