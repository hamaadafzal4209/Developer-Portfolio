import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MERN Blog App With Admin Panel",
    description:
      "A full-featured blog application with an admin panel, including user authentication, CRUD operations, and responsive design.",
    imgSrc: "/assets/blog-project.png",
    githubLink: "https://github.com/hamaadafzal4209/Blog-App-With-Admin-Panel",
    liveLink: "https://blog-app-with-admin-panel.onrender.com/",
    techStack: ["React", "MongoDB", "Express", "Tailwind CSS"],
  },
  {
    title: "Full Stack Food Ordering App",
    description:
      "A complete food ordering app featuring a modern UI/UX, secure payment gateway, and robust backend capabilities.",
    imgSrc: "/assets/food-app.jpg",
    githubLink: "https://github.com/hamaadafzal4209/Food-Ordering-App",
    liveLink: "https://savory-bites.onrender.com/",
    techStack: ["React", "MongoDB", "Node Js", "Stripe"],
  },
  {
    title: "Real Estate App",
    description:
      "A real estate website with property listing, filtering, user authentication, and a responsive, user-friendly interface.",
    imgSrc: "/assets/estate-app.png",
    githubLink: "https://github.com/hamaadafzal4209/mern-real-estate-website",
    liveLink: "https://mern-estate-vqt3.onrender.com/",
    techStack: ["React", "Node Js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "React Portfolio",
    description:
      "A modern and responsive portfolio website showcasing projects with a clean, minimal design.",
    imgSrc: "/assets/portfolio.png",
    githubLink: "https://github.com/hamaadafzal4209/React-Smith-Portfolio-",
    liveLink: "https://main--smithdesigns.netlify.app/",
    techStack: ["React", "Tailwind CSS"],
  },
];

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="pt-12 pb-8 px-[5%] bg-gray-900 text-white"
    >
      <div className="mb-12">
        <Fade>
          <h2 className="text-base uppercase font-normal text-gray-400 mb-4">
            My Projects
          </h2>
        </Fade>
        <Fade>
          <h2 className="text-2xl md:text-5xl font-bold mb-4">Showcase.</h2>
        </Fade>
        <Fade>
          <p className="text-gray-400 text-sm max-w-xl leading-[22px]">
            Explore a selection of my recent projects, showcasing a blend of
            creativity and technical expertise. Each project highlights my
            proficiency in developing high-quality, responsive applications
            tailored to meet specific user needs and solve real-world problems.
          </p>
        </Fade>
      </div>

      {/* Projects */}
      <div className="projects-card-container gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Fade>
      <div
        style={{
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          borderRadius: "12px",
          background: "#1b2a38",
          overflow: "hidden",
          backdropFilter: "blur(15px)",
          position: "relative",
        }}
        className="relative flex flex-col items-center p-4"
      >
        <img
          src={project.imgSrc}
          alt={`${project.title} Screenshot`}
          className="rounded-lg aspect-video"
        />
        <div className="absolute top-6 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
          <a href={project.githubLink} target="_blank">
            <FaGithub className="text-white text-lg" />
          </a>
        </div>
        <div className="absolute top-16 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
          <a href={project.liveLink} target="_blank">
            <FaExternalLinkAlt className="text-white text-lg" />
          </a>
        </div>
        <div className="mt-4 text-left">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-black text-white text-xs py-1 px-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Portfolio;