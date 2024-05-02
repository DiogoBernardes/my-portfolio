import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-full sm:w-[400px] h-[375px]">
          <div className="h-2/3 sm:h-2/3 relative">
            <div className="relative w-full h-full">
              <a href={link}>
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>
          <div className="h-1/3 sm:h-1/3 p-4">
            <h1 className="text-xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;