import React from "react";
import Navbar from "../../components/Navbar";
import { skills } from "../../Data/Skills";
import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // stagger each skill
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Navbar />
      <section
        id="skills"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-8 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center">
            My <span className="text-blue-400">Skills</span>
          </h2>

          <p className="text-gray-400 text-center mt-4">
            Technologies and tools I am comfortable working with
          </p>

          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 border border-gray-700 hover:border-blue-400 hover:scale-105 transition py-6 rounded-xl text-center text-lg font-semibold"
                variants={skillVariants}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
