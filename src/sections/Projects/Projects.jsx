import React from "react";
import Navbar from "../../components/Navbar";
import { projects } from "../../Data/Projects";
const Projects = () => {
  return (
    <>
      <Navbar />
      <section
        id="projects"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-8 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center">
            My <span className="text-blue-400">Projects</span>
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl relative border border-gray-700 hover:border-blue-400 hover:scale-105 transition"
              >
                <div className="pb-16">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>

                  <p className="text-gray-300 mt-3">{project.desc}</p>

                  <p className="text-blue-400 mt-3">{project.tech}</p>
                </div>

                {/* Button at bottom center */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-5 py-2 border border-amber-400 rounded-full hover:bg-amber-400 hover:text-black transition">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
