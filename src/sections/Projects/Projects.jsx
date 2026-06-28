import React from "react";
import { motion } from "framer-motion";
import {
  FaTools,
  FaUserCog,
  FaBullseye,
  FaGraduationCap,
} from "react-icons/fa";
import { projects } from "../../Data/Projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center"
        >
          Engineering <span className="text-blue-400">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 max-w-3xl mx-auto mt-5 leading-8"
        >
          Academic and industrial projects that strengthened my understanding of
          Mechanical Design, Manufacturing Processes, Fabrication, Automation,
          Engineering Analysis and Industrial Workflow.
        </motion.p>

        <div className="mt-16 space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                borderColor: "#60A5FA",
              }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="flex-1">
                  <span className="inline-block px-4 py-2 rounded-full bg-blue-600 text-sm font-semibold mb-5">
                    {project.button}
                  </span>

                  <h3 className="text-3xl font-bold">{project.title}</h3>

                  <div className="mt-8 space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-semibold text-blue-400">
                        <FaBullseye />
                        Objective
                      </h4>

                      <p className="text-gray-300 mt-2 leading-8">
                        {project.objective}
                      </p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-semibold text-green-400">
                        <FaUserCog />
                        My Contribution
                      </h4>

                      <p className="text-gray-300 mt-2 leading-8">
                        {project.contribution}
                      </p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-semibold text-orange-400">
                        <FaTools />
                        Tools / Engineering Areas
                      </h4>

                      <p className="text-gray-300 mt-2">{project.tools}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-80">
                  <div className="bg-gray-950 rounded-2xl border border-gray-700 p-6 h-full">
                    <h4 className="flex items-center gap-2 text-blue-400 text-xl font-semibold">
                      <FaGraduationCap />
                      Key Learnings
                    </h4>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.learning.map((item, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 hover:border-blue-400 transition"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-10">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-semibold">
                        {project.button}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 bg-linear-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-blue-400">
            Engineering Experience
          </h3>

          <div className="grid md:grid-cols-4 gap-5 mt-8">
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h4 className="font-semibold">Mechanical Design</h4>
              <p className="text-gray-400 mt-2">
                Academic design projects and engineering analysis.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h4 className="font-semibold">Fabrication</h4>
              <p className="text-gray-400 mt-2">
                Manufacturing, assembly and workshop practice.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h4 className="font-semibold">Industrial Exposure</h4>
              <p className="text-gray-400 mt-2">
                Internship experience at Therm-X Industrial Equipments Pvt. Ltd.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h4 className="font-semibold">Continuous Learning</h4>
              <p className="text-gray-400 mt-2">
                AutoCAD, SolidWorks, HVAC and Mechanical Design.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
