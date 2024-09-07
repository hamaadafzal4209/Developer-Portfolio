import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const navbarVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "100%" },
};

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check to set the sticky state correctly
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white transition-shadow duration-300 ${
        isSticky ? "fixed top-0 left-0 right-0 shadow-md z-50" : "relative"
      }`}
      variants={navbarVariants}
      syu
    >
      <div className="flex items-center justify-between py-4 px-[5%]">
        {/* Logo */}
        <div className="text-[22px] md:text-2xl font-bold">Portfolio</div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-6">
            <li className="px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer">
              <a href="#portfolio">Projects</a>
            </li>
            <li className="px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 w-64 bg-gray-800 h-screen text-white md:hidden z-[50000]"
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          <FaTimes />
        </button>
        <ul className="flex flex-col items-start pt-20 space-y-4 pl-4">
          <li className="px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer">
            <a href="#portfolio">Projects</a>
          </li>
          <li className="px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;