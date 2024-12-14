import React from "react";
import {
  FaHtml5,
  FaCss3Alt,

  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,

  SiTypescript,
  SiMysql,
  SiPostman,
  SiFigma,
  SiDaisyui,
  SiJavascript,
} from "react-icons/si";
import { SkillCard } from "./skillCard";

export const MySkills: React.FC = () => {
  return (
    <div className="bg-base-200 text-base-content p-10 min-h-screen flex items-center justify-center" >
      <div className="container mx-auto max-w-screen-lg">
        <h2 className="text-5xl font-extrabold mb-10 text-center">Skills</h2>
        <div className="text-lg mb-6 bg-base-200 text-center">
        Here you will find some of the tools and technologies I have worked with.</div>
        <div className="flex flex-wrap justify-center">
          <SkillCard
            title="Front-end"
            description="Tools and frameworks for user interface and experience:"
            icons={[
              {
                icon: <FaHtml5 className="text-2xl text-orange-600" />,
                tooltip: "HTML5",
              },
              {
                icon: <FaCss3Alt className="text-2xl text-blue-600" />,
                tooltip: "CSS3",
              },
              {
                icon: <SiJavascript className="text-2xl text-yellow-500" />,
                tooltip: "JavaScript",
              },
              {
                icon: <SiTypescript className="text-2xl text-blue-500" />,
                tooltip: "TypeScript",
              },
              {
                icon: <FaReact className="text-2xl text-cyan-500" />,
                tooltip: "React",
              },
              {
                icon: <SiTailwindcss className="text-2xl text-teal-500" />,
                tooltip: "Tailwind CSS",
              },
              {
                icon: <SiDaisyui className="text-2xl text-pink-500" />,
                tooltip: "daisyUI",
              },
            ]}
          />
          <SkillCard
            title="Back-end"
            description="Tools used for server-side development:"
            icons={[
              {
                icon: <SiTypescript className="text-2xl text-blue-500" />,
                tooltip: "TypeScript",
              },
              {
                icon: <FaNodeJs className="text-2xl text-green-600" />,
                tooltip: "Node.js",
              },
              {
                icon: <SiMysql className="text-2xl text-blue-600" />,
                tooltip: "MySQL",
              },
            ]}
          />
          <SkillCard
            title="Other Skills"
            description="Other tools to work more efficiently and effectively:"
            icons={[
              {
                icon: <FaGithub className="text-2xl text-base-content" />,
                tooltip: "GitHub",
              },
              {
                icon: <SiPostman className="text-2xl text-orange-600" />,
                tooltip: "Postman",
              },
              {
                icon: <SiFigma className="text-2xl text-pink-500" />,
                tooltip: "Figma",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
