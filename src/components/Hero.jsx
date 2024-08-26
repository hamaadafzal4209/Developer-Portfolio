import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Hero() {
  return (
    <div className="text-white min-h-[80vh] flex items-center bg-gray-900">
      <div className="container mx-auto px-6 py-12 2xl:py-20 ">
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 transition-transform duration-300">
            Hamaad Afzal
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 transition-transform duration-300">
            Full Stack Web And Mobile App Developer
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto transition-transform duration-300">
            I build efficient, scalable, and visually appealing web applications with a focus on clean design and smooth user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row justify-center gap-6 mb-10">
            <a
              href="/path-to-your-cv.pdf"
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

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-transform duration-300 hover:text-indigo-300 hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-transform duration-300 hover:text-indigo-300 hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-transform duration-300 hover:text-indigo-300 hover:scale-125"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;