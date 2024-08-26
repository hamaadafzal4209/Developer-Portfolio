import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="px-[5%] flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Hamaad Afzal. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/username" aria-label="GitHub" className="hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/username/" aria-label="LinkedIn" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:youremail@example.com" aria-label="Email" className="hover:text-white">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;  