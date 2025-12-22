import React from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <>
      <div className="min-h-screen text-white flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-950 pt-20 px-8">
        <Navbar />

        {/* Image */}
        <motion.div
          className="w-[360px] h-[320px] bg-amber-300 text-black font-bold text-4xl flex items-center justify-center rounded-[44%_79%_21%_56%]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          whileHover={{ scale: 1.05 }}
        >
          IMG
        </motion.div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-white text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-blue-400">Rahul</span>
          </motion.h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
            {[
              "Frontend Developer",
              "React",
              "JavaScript",
              "Backend",
              "MongoDB",
              "ExpressJS",
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="text-gray-300 text-lg font-medium bg-gray-800 p-3 rounded-lg text-center"
                custom={index}
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {tech}
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-gray-400 mt-4 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            I build clean, modern and user-friendly web applications and I'm
            currently looking for internship opportunities to learn and grow.
          </motion.p>

          <motion.div
            className="mt-6 flex gap-6 justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              className="border border-blue-400 hover:bg-blue-600 bg-blue-400 hover:border-blue-600 px-6 py-3 rounded-lg font-semibold transition"
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
