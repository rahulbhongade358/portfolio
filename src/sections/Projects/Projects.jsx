import React from "react";
import { projects } from "../../Data/Projects";
import { motion } from "framer-motion";
const Projects = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -40,
      scale: 0.9,
      filter: "blur(6px)",
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <motion.section
        id="projects"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-8 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-blue-400">Projects</span>
          </motion.h2>
          <motion.div
            className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="
                  bg-gray-800 p-6 rounded-xl relative border border-gray-700 
                  transition shadow-lg
                "
                whileHover={{
                  scale: 1.05,
                  rotateX: 6,
                  rotateY: -6,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
                  borderColor: "#60A5FA",
                }}
                transition={{ type: "spring", stiffness: 160, damping: 10 }}
              >
                <div className="pb-16">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>

                  <p className="text-gray-300 mt-3">{project.desc}</p>

                  <p className="text-blue-400 mt-3">{project.tech}</p>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className="
                        px-5 py-2 border border-amber-400 rounded-full
                        hover:bg-amber-400 hover:text-black transition
                      "
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
