import React from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

const timelineVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <>
      <Navbar />

      <section
        id="about"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-8"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center"
          >
            About <span className="text-blue-400">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-gray-300 leading-relaxed text-lg text-center"
          >
            I am a final-year Mechanical Engineering student with a strong
            passion for technology and Frontend Development. I shifted my focus
            toward software because I enjoy building interactive, user-friendly
            web applications. I completed my internship at{" "}
            <span className="text-blue-400 font-semibold">
              Therm X Industrial Equipments Pvt. Ltd.
            </span>{" "}
            where I developed and delivered a working Stock Management Website
            for the company. Most of my learning came through YouTube,
            documentation, and tools like ChatGPT to speed up understanding —
            which I consider my strength because it shows I am curious,
            self-learning and resourceful.
            <br />
            <br />
            My goal now is to start my career in the IT field, gain real-world
            experience, and keep improving as a Frontend Developer.
          </motion.p>
          <div className="mt-14">
            <div className="relative border-l border-gray-700 ml-4">
              {/* Education */}
              <motion.div
                variants={timelineVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="mb-10 ml-6"
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2"></div>
                <h3 className="text-xl font-semibold text-blue-400">
                  🎓 Education
                </h3>
                <p className="text-gray-300">
                  Final Year Mechanical Engineering Student with strong interest
                  in Web Development.
                </p>
              </motion.div>
              <motion.div
                variants={timelineVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mb-10 ml-6"
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2"></div>
                <h3 className="text-xl font-semibold text-blue-400">
                  🏢 Internship
                </h3>
                <p className="text-gray-300">
                  Completed internship at Therm X and delivered a working web
                  application.
                </p>
              </motion.div>
              <motion.div
                variants={timelineVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-10 ml-6"
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2"></div>
                <h3 className="text-xl font-semibold text-blue-400">
                  💻 Internship Project
                </h3>
                <p className="text-gray-300">
                  Built a Stock Management Website using modern frontend
                  technologies with smooth UI and performance focus.
                </p>
              </motion.div>
              <motion.div
                variants={timelineVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mb-10 ml-6"
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2"></div>
                <h3 className="text-xl font-semibold text-blue-400">
                  🚀 Goals
                </h3>
                <p className="text-gray-300">
                  Start IT career, gain real-world development experience, and
                  keep growing as a passionate frontend developer.
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mt-10"
          >
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
