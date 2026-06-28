import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../Data/Skills";
import {
  FaDraftingCompass,
  FaCogs,
  FaIndustry,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

const Skills = () => {
  const icons = {
    "CAD & Design": <FaDraftingCompass size={32} className="text-blue-400" />,
    "Core Mechanical": <FaCogs size={32} className="text-orange-400" />,
    "Production & Quality": <FaIndustry size={32} className="text-green-400" />,
    "Computer Skills": <FaLaptopCode size={32} className="text-purple-400" />,
    "Professional Skills": <FaUsers size={32} className="text-pink-400" />,
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center"
        >
          Mechanical <span className="text-blue-400">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mt-5 max-w-3xl mx-auto leading-8"
        >
          Strong academic foundation in Mechanical Engineering with continuous
          learning in CAD Design, Manufacturing, Production Engineering and
          Industrial Applications.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                borderColor: "#60A5FA",
              }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                {icons[skill.category]}
                <h3 className="text-2xl font-semibold">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-gray-300 hover:border-blue-400 hover:text-white transition"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 bg-linear-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-4">
            Currently Learning
          </h3>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h4 className="font-semibold text-lg">AutoCAD</h4>
              <p className="text-gray-400 mt-2">
                2D drafting, engineering drawings and mechanical component
                design.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h4 className="font-semibold text-lg">SolidWorks</h4>
              <p className="text-gray-400 mt-2">
                Part modelling, assemblies and mechanical product design.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h4 className="font-semibold text-lg">Future Focus</h4>
              <p className="text-gray-400 mt-2">
                HVAC Systems, Building Services, Mechanical Design and Data
                Center Infrastructure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
