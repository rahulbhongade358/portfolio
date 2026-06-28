import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCog } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/95 backdrop-blur-md border-b border-gray-800 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}

        <a href="#" className="flex items-center gap-3 font-bold text-2xl">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <FaCog className="text-white text-xl animate-spin [animation-duration:8s]" />
          </div>

          <div>
            <h2 className="text-white">Rahul</h2>

            <p className="text-xs text-blue-400 font-normal">
              Mechanical Engineer
            </p>
          </div>
        </a>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8 text-gray-300">
          {links.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-blue-400 transition duration-300 font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}

        <a
          href="#contact"
          className="hidden lg:block bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-xl font-semibold"
        >
          Hire Me
        </a>

        {/* Mobile */}

        <button onClick={toggleMenu} className="lg:hidden text-white">
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.3,
            }}
            className="lg:hidden bg-gray-900 border-t border-gray-800"
          >
            <ul className="flex flex-col text-center py-6 gap-6">
              {links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-lg text-gray-300 hover:text-blue-400 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#contact"
                  onClick={toggleMenu}
                  className="inline-block bg-blue-600 px-6 py-3 rounded-xl font-semibold"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
