import React from "react";
import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section
        id="about"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-8"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold">
              About <span className="text-blue-400">Me</span>
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed">
              I am a final-year engineering student with a strong interest in
              <span className="text-blue-400"> Frontend Development</span>. I
              enjoy building clean, user-friendly and functional web
              applications using React, JavaScript, HTML, and CSS.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              I have completed an internship where I successfully built and
              delivered a working web application for a company. I love
              learning, experimenting and improving my skills.
            </p>

            <div className="mt-6">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full h-[320px] bg-gray-800 rounded-3xl flex items-center justify-center text-gray-400">
            Add Image / Illustration Later
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
