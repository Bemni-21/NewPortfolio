import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "Event Planner",
    href: "#", // Link to project or GitHub
    imageSrc:
      "/event3.jpg", // Replace with your project image
    used: "ReactJS, Node.js, MongoDB",
    description: "A platform for event management and planning.",
  },
  {
    id: 2,
    name: "Music Website",
    href: "#", // Link to project or GitHub
    imageSrc:
      "/music1.jpg", // Replace with your project image
    used: "ReactJS, Node.js, MongoDB, Redux",
    description: "A music streaming website with user management.",
  },
  {
    id: 3,
    name: "Online Voting System",
    href: "#", // Link to project or GitHub
    imageSrc:
      "/vote.jpg", // Replace with your project image
    used: "ReactJS, Node.js, Express, MongoDB",
    description: "A secure online voting application.",
  },
  {
    id: 4,
    name: "Portfolio Website",
    href: "#", // Link to project or GitHub
    imageSrc:
      "port1.jpg", // Replace with your project image
    used: "ReactJS, TailwindCSS",
    description: "My personal portfolio showcasing my skills and projects.",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos="flip-left"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl ">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <a href={project.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.description}</p>
                  <p className="text-sm font-medium">{project.used}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
}
