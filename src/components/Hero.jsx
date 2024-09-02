import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

// Define animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 }, // Start hidden and translated down
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Slide up and fade in
};

function Hero() {
  return (
    <div className="text-white min-h-[80vh] flex items-center bg-gray-900">
      <div className="container mx-auto px-6 py-12 2xl:py-20">
        <div className="text-center">
          {/* Animated Header */}
          <Fade>
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-7xl font-bold mb-4"
            >
              Hamaad Afzal
            </motion.h1>
          </Fade>
          {/* TypeAnimation for medium screens and above */}
          <Fade>
            <div className="hidden sm:block">
              <TypeAnimation
                sequence={[
                  "Frontend Web Developer",
                  2000,
                  "Mobile App Developer",
                  2000, // Waits 2s
                  "Backend Web Developer",
                  2000, // Waits 2s
                ]}
                speed={50} // Speed of typing
                wrapper="p"
                repeat={Infinity}
                className="text-lg sm:text-3xl font-medium mb-8"
              />
            </div>
          </Fade>
          {/* Simple text for small screens */}
          <Fade>
            <div className="block sm:hidden">
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-lg font-medium mb-4"
              >
                Full Stack Web And App Developer
              </motion.p>
            </div>
          </Fade>
          <Fade>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            >
              I build efficient, scalable, and visually appealing web
              applications with a focus on clean design and smooth user
              experiences.
            </motion.p>
          </Fade>
          {/* Buttons */}
          <Fade>
            <div className="flex flex-col xs:flex-row justify-center gap-6 mb-10">
              <a
                href="../../public/Hafiz Hamaad Afzal CV.pdf"
                download
                className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-full transition-transform duration-300 hover:bg-indigo-700 hover:scale-105"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border-2 border-indigo-800 text-white font-semibold rounded-full transition-transform duration-300 hover:bg-indigo-800 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </Fade>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/hamaadafzal4209/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-transform duration-300 hover:text-indigo-300 hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hamaad-afzal-6264022b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-transform duration-300 hover:text-indigo-300 hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:hamaadafzal516@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-transform duration-300 hover:text-indigo-300 hover:scale-125"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
