import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

// Define animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 }, // Start hidden and translated down
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }, // Smooth slide up and fade in
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }, // Scale and fade with a slight delay
  },
};

const socialIconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 }, // Fade in and move up
  },
};

function Hero() {
  return (
    <div className="min-h-[80vh] flex items-center lg:flex-row flex-col-reverse px-[5%] py-10">
      <div className="text-white bg-gray-900 w-full lg:w-1/2">
        <div className="py-12 2xl:py-20">
          <div className="">
            {/* Animated Header */}
            <Fade>
              <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                {"Hi I'm"} <span className="text-indigo-800">Hamaad Afzal</span>
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
                    2000,
                    "Backend Web Developer",
                    2000,
                  ]}
                  speed={50}
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

            {/* Description Text */}
            <Fade>
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-sm md:text-lg mb-8 text-gray-400 max-w-2xl"
              >
                I build efficient, scalable, and visually appealing web
                applications with a focus on clean design and smooth user
                experiences.
              </motion.p>
            </Fade>

            {/* Buttons */}
            <Fade>
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-6 mb-10"
              >
                <a
                  href="/Hafiz Hamaad Afzal CV.pdf"
                  download
                  className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-full transition-transform duration-300 hover:bg-indigo-700 hover:scale-105 text-center"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-transparent text-center border-2 border-indigo-800 text-white font-semibold rounded-full transition-transform duration-300 hover:bg-indigo-800 hover:scale-105"
                >
                  Contact Me
                </a>
              </motion.div>
            </Fade>

            {/* Social Icons */}
            <motion.div
              variants={socialIconVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center sm:justify-start gap-6"
            >
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
              <a
                href="https://leetcode.com/u/HamaadAfzal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl transition-transform duration-300 hover:text-indigo-300 hover:scale-125"
              >
                <img
                  src="/assets/leetcode.png"
                  className="w-[30px] filter invert"
                  alt="Leetcode"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <motion.img
          src="/assets/hero-img.svg"
          className=" max-w-md lg:max-w-lg w-full px-4"
          alt="Hero Image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default Hero;
