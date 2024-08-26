import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="pt-12 pb-8 px-[5%] bg-gray-900 text-white"
    >
      <div className="mb-12">
        <h2 className="text-base uppercase font-normal text-gray-400 mb-4">
          My Projects
        </h2>
        <h2 className="text-2xl md:text-5xl font-bold mb-4">Showcase.</h2>
        <p className="text-gray-400 text-sm max-w-xl leading-[22px]">
          Explore a selection of my recent projects, showcasing a blend of
          creativity and technical expertise. Each project highlights my
          proficiency in developing high-quality, responsive applications
          tailored to meet specific user needs and solve real-world problems.
        </p>
      </div>

      {/* Projects */}
      <div className="projects-card-container gap-6">
        {/* Card 1 */}
        <div
          style={{
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
            backdropFilter: "blur(15px)",
            position: "relative",
          }}
          className="relative flex flex-col items-center p-4"
        >
          <img
            src="../../public/assets/bgIMG.png"
            alt="Project Screenshot"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-6 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
            <FaGithub className="text-white text-lg" />
          </div>
          <div className="absolute top-16 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
            <FaExternalLinkAlt className="text-white text-lg" />
          </div>
          <div className="mt-4 text-left">
            <h3 className="text-lg font-semibold mb-2">Project Title</h3>
            <p className="text-gray-300 text-sm mb-2">
              Brief description of the project, outlining its features and
              technologies used. A concise summary that captures the essence of
              the work.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                HTML
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                CSS
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                JavaScript
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                React
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
            backdropFilter: "blur(15px)",
            position: "relative",
          }}
          className="relative flex flex-col items-center p-4"
        >
          <img
            src="../../public/assets/bgIMG.png"
            alt="Project Screenshot"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-6 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
            <FaGithub className="text-white text-lg" />
          </div>
          <div className="absolute top-16 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
            <FaExternalLinkAlt className="text-white text-lg" />
          </div>
          <div className="mt-4 text-left">
            <h3 className="text-lg font-semibold mb-2">Project Title</h3>
            <p className="text-gray-300 text-sm mb-2">
              Brief description of the project, outlining its features and
              technologies used. A concise summary that captures the essence of
              the work.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                HTML
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                CSS
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                JavaScript
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                React
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
            backdropFilter: "blur(15px)",
            position: "relative",
          }}
          className="relative flex flex-col items-center p-4"
        >
          <img
            src="../../public/assets/bgIMG.png"
            alt="Project Screenshot"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-6 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
            <FaGithub className="text-white text-lg" />
          </div>
          <div className="absolute top-16 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
            <FaExternalLinkAlt className="text-white text-lg" />
          </div>
          <div className="mt-4 text-left">
            <h3 className="text-lg font-semibold mb-2">Project Title</h3>
            <p className="text-gray-300 text-sm mb-2">
              Brief description of the project, outlining its features and
              technologies used. A concise summary that captures the essence of
              the work.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                HTML
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                CSS
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                JavaScript
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                React
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
            backdropFilter: "blur(15px)",
            position: "relative",
          }}
          className="relative flex flex-col items-center p-4"
        >
          <img
            src="../../public/assets/bgIMG.png"
            alt="Project Screenshot"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-6 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
            <FaGithub className="text-white text-lg" />
          </div>
          <div className="absolute top-16 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
            <FaExternalLinkAlt className="text-white text-lg" />
          </div>
          <div className="mt-4 text-left">
            <h3 className="text-lg font-semibold mb-2">Project Title</h3>
            <p className="text-gray-300 text-sm mb-2">
              Brief description of the project, outlining its features and
              technologies used. A concise summary that captures the essence of
              the work.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                HTML
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                CSS
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                JavaScript
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                React
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
            backdropFilter: "blur(15px)",
            position: "relative",
          }}
          className="relative flex flex-col items-center p-4"
        >
          <img
            src="../../public/assets/bgIMG.png"
            alt="Project Screenshot"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-6 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
            <FaGithub className="text-white text-lg" />
          </div>
          <div className="absolute top-16 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
            <FaExternalLinkAlt className="text-white text-lg" />
          </div>
          <div className="mt-4 text-left">
            <h3 className="text-lg font-semibold mb-2">Project Title</h3>
            <p className="text-gray-300 text-sm mb-2">
              Brief description of the project, outlining its features and
              technologies used. A concise summary that captures the essence of
              the work.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                HTML
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                CSS
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                JavaScript
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                React
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
            backdropFilter: "blur(15px)",
            position: "relative",
          }}
          className="relative flex flex-col items-center p-4"
        >
          <img
            src="../../public/assets/bgIMG.png"
            alt="Project Screenshot"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-6 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
            <FaGithub className="text-white text-lg" />
          </div>
          <div className="absolute top-16 right-6 bg-black w-9 flex items-center justify-center h-9 p-2 rounded-full shadow-lg cursor-pointer">
            <FaExternalLinkAlt className="text-white text-lg" />
          </div>
          <div className="mt-4 text-left">
            <h3 className="text-lg font-semibold mb-2">Project Title</h3>
            <p className="text-gray-300 text-sm mb-2">
              Brief description of the project, outlining its features and
              technologies used. A concise summary that captures the essence of
              the work.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                HTML
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                CSS
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                JavaScript
              </span>
              <span className="bg-black text-white text-xs py-1 px-2 rounded-full">
                React
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;