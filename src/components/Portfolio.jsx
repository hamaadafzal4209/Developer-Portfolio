import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MERN Blog App With Admin Panel",
    description:
      "A full-featured blog application with an admin panel. This project demonstrates a comprehensive use of the MERN stack, featuring user authentication, CRUD operations, and a responsive design. Tailwind CSS was used to create a visually appealing and responsive interface.",
    imgSrc: "/assets/blog-project.png",
    githubLink: "https://github.com/hamaadafzal4209/Blog-App-With-Admin-Panel",
    liveLink: "https://blog-app-with-admin-panel.onrender.com/",
    techStack: ["React", "MongoDB", "Express", "Tailwind CSS"],
  },
  {
    title: "Full Stack Food Ordering App",
    description:
      "A complete food ordering application featuring a modern UI/UX design. The project includes a secure payment gateway integrated with Stripe and utilizes MongoDB for data storage. This app showcases a seamless user experience and robust backend capabilities.",
    imgSrc: "/assets/food-app.jpg",
    githubLink: "https://github.com/hamaadafzal4209/Food-Ordering-App",
    liveLink: "https://savory-bites.onrender.com/",
    techStack: ["React", "MongoDB", "Node Js", "Stripe"],
  },
  {
    title: "Real Estate App",
    description:
      "A real estate website built with the MERN stack. It allows users to browse and list properties, featuring user authentication, property filtering, and an intuitive design. Tailwind CSS was used to create a clean, responsive, and user-friendly interface.",
    imgSrc: "/assets/estate-app.png",
    githubLink: "https://github.com/hamaadafzal4209/mern-real-estate-website",
    liveLink: "https://mern-estate-vqt3.onrender.com/",
    techStack: ["React", "Node Js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "React Portfolio",
    description:
      "A modern and responsive portfolio website built with React and Tailwind CSS. This project showcases various projects and skills, with a clean and minimal design, focusing on performance and aesthetics.",
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
  const [isExpanded, setIsExpanded] = useState(false);
  const charLimit = 90;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

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
          <p className="text-gray-300 text-sm mb-2">
            {isExpanded
              ? project.description
              : project.description.slice(0, charLimit) +
                (project.description.length > charLimit ? "..." : "")}
          </p>
          {project.description.length > charLimit && (
            <button
              onClick={toggleExpansion}
              className="text-blue-400 text-xs underline"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
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
