import React from "react";
import Navbar from "../../components/Navbar";

const Hero = () => {
  return (
    <>
      <div className="min-h-screen text-white flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-950 pt-20 px-8">
        <Navbar />
        <div className="w-[360px] h-[320px] bg-amber-300 text-black font-bold text-4xl flex items-center justify-center rounded-[44%_79%_21%_56%]">
          IMG
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-white text-5xl font-bold">
            Hi, I'm <span className="text-blue-400">Rahul</span>
          </h1>

          <p className="text-gray-300 text-xl mt-4">
            Frontend Developer | React | JavaScript
          </p>

          <p className="text-gray-400 mt-4 max-w-lg">
            I build clean, modern and user-friendly web applications and I'm
            currently looking for internship opportunities to learn and grow.
          </p>

          <div className="mt-6 flex gap-6 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-400 hover:bg-blue-600 bg-blue-400 hover:border-blue-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
