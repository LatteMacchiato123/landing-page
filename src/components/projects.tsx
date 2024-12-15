import React from "react";
import Image from "next/image";

interface IProject {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export function Projects() {
  const projectData: IProject[] = [
    {
      title: "To-Do List",
      description: "A simple to-do list application created using:",
      image: "/projects/todo-list.png", // Ensure this image exists in the public/projects directory
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      link: "https://to-do-list-andhikagp.vercel.app/",
    },
    {
      title: "Gojek Clone App",
      description: "A clone version of Gojek app created using:",
      image: "/projects/gojek-clone.png", // Ensure this image exists in the public/projects directory
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "DaisyUI"],
      link: "https://gojek-clone-react.vercel.app/",
    },
    {
      title: "Spaclean Company Website",
      description: "laundry company website created using:",
      image: "/projects/spaclean-web.png", // Ensure this image exists in the public/projects directory
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "DaisyUI"],
      link: "https://spaclean-web.vercel.app/",
    },
  ];

  return (
    <section className="bg-base-200 text-base-content p-20 min-h-screen" id="projects">
      <h1 className="text-5xl mb-4 bg-base-200 text-center font-extrabold">
        Projects
      </h1>
      <div className="text-lg mb-6 bg-base-200 text-center">
        Here you will find some of the personal projects I have worked on.
      </div>
      <div className="container mx-auto max-w-screen-md flex flex-wrap justify-center bg-base">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-compact lg:card-side bg-base-200 m-4 w-full transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <figure className="overflow-hidden w-full">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-contain rounded-2xl"
                width={300}
                height={300}
                
              />
               <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p className="mb-2 text-lg">{project.description}</p>
              <div className="mb-4 flex align-middle">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="badge badge-outline mx-1 px-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            </figure>
           
          </a>
        ))}
      </div>
    </section>
  );
}
