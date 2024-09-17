/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Project Data
const projects = [
  {
    title: "DevBytes Blog App",
    description:
      "Full stack MERN blog app with admin panel for content management.",
    imgSrc: "/assets/blog-project.png",
    githubLink: "https://github.com/hamaadafzal4209/Blog-App-With-Admin-Panel",
    liveLink: "https://blog-app-with-admin-panel.onrender.com/",
    techStack: ["React", "MongoDB", "Firebase", "Node Js", "Tailwind CSS"],
  },
  {
    title: "Savory Bites",
    description:
      "Food ordering application featuring a user-friendly interface and secure payments.",
    imgSrc: "/assets/food-app.jpg",
    githubLink: "https://github.com/hamaadafzal4209/Food-Ordering-App",
    liveLink: "https://savory-bites.onrender.com/",
    techStack: ["React", "MongoDB", "Node Js", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Real Estate Platform",
    description:
      "Real estate site with property listings, user authentication, and advanced filters.",
    imgSrc: "/assets/estate-app.png",
    githubLink: "https://github.com/hamaadafzal4209/mern-real-estate-website",
    liveLink: "https://mern-estate-vqt3.onrender.com/",
    techStack: ["React", "Node Js", "MongoDB", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Modern Portfolio",
    description:
      "Responsive portfolio showcasing projects with a clean and minimal design.",
    imgSrc: "/assets/portfolio.png",
    githubLink: "https://github.com/hamaadafzal4209/React-Smith-Portfolio-",
    liveLink: "https://main--smithdesigns.netlify.app/",
    techStack: ["React", "Redux", "HTML", "CSS", "Git"],
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
            Explore a selection of my recent projects, each demonstrating my
            ability to create high-quality, responsive applications tailored to
            solve real-world problems.
          </p>
        </Fade>
      </div>

      {/* Projects */}
      <div className="projects-card-container gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

// ProjectCard Component
function ProjectCard({ project }) {
  const techImages = {
    React: "/assets/react.png",
    MongoDB: "/assets/mongodb.png",
    Express: "/assets/expressjs.png",
    "Tailwind CSS": "/assets/tailwind-css.png",
    Stripe: "/assets/stripe.png",
    "Node Js": "/assets/node.png",
    Firebase: "/assets/firebase.png",
    Redux: "/assets/redux.png",
    HTML: "/assets/html.png",
    CSS: "/assets/css.png",
    Git: "/assets/git.png",
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
        {/* Project Thumbnail */}
        <img
          src={project.imgSrc}
          alt={`${project.title} Screenshot`}
          className="rounded-lg aspect-video"
        />
        {/* GitHub & Live Links */}
        <div className="absolute top-6 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-lg" />
          </a>
        </div>
        <div className="absolute top-16 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="text-white text-lg" />
          </a>
        </div>

        {/* Project Title & Description */}
        <div className="mt-4 text-left w-full">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-2">{project.description}</p>

          {/* Tech Stack Images */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.techStack.map((tech, i) => (
              <div
                key={i}
                className="bg-gray-900 w-9 h-9 p-2 rounded-full border-[0.6px] border-white/35 flex items-center justify-center"
              >
                <img
                  src={techImages[tech]}
                  alt={`${tech} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Portfolio;
