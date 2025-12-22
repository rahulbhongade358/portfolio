import React from "react";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          My <span className="text-blue-400">Portfolio</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <a href="#">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
          </a>
          <a href="#about">
            <li className="hover:text-blue-400 cursor-pointer">About</li>
          </a>
          <a href="#projects">
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          </a>
          <a href="#skills">
            <li className="hover:text-blue-400 cursor-pointer">Skills</li>
          </a>
          <a href="#contact">
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
