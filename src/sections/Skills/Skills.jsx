import React from "react";
import { skills } from "../../Data/Skills";
import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <section
        id="skills"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-8 py-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_50%)]"></div>

        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center"
          >
            My <span className="text-blue-400">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-center mt-4"
          >
            Technologies and tools I work with regularly
          </motion.p>
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                  boxShadow: "0px 0px 25px rgba(56, 189, 248, 0.6)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-900 border border-gray-700 rounded-xl py-6 text-center text-lg font-semibold 
                  hover:border-blue-400 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-500/10 blur-2xl opacity-0 hover:opacity-100 transition"></div>
                <motion.p
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  {skill}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
