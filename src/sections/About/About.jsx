import React from "react";
import { motion } from "framer-motion";

const timelineVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <>
      <section
        id="about"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-8 py-16"
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
            I am a final-year Mechanical Engineering student who has developed a
            strong interest in Web Development and the IT field. Even though I
            don’t come from a traditional Computer Science background, I
            genuinely enjoy building interactive, user-friendly web applications
            and continuously improving my skills.
            <br />
            <br />I believe in learning by doing. I have built real working
            projects and successfully completed my internship at{" "}
            <span className="text-blue-400 font-semibold">
              Therm X Industrial Equipments Pvt. Ltd.
            </span>{" "}
            where I developed a Stock Management Website for the company. Most
            of my learning has come through YouTube, documentation, real-world
            practice and guidance from communities and mentors — which shows I
            am curious, self-driven and always ready to learn.
            <br />
            <br />
            I am still improving in areas like DSA and theoretical computer
            science concepts, but that is exactly why I want to enter the IT
            industry — to gain real practical knowledge, surround myself with
            knowledgeable people, continue learning, and keep getting better
            every single day.
            <br />
            <br />
            As a fresher, I may not know everything, but I can confidently
            promise one thing — whichever company I join, I will give my best,
            never disappoint the team, and grow into a valuable developer
            through dedication, consistency and hard work.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="mt-10 bg-gray-900 border border-blue-500/40 rounded-2xl p-6 shadow-lg text-center"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              💡 Why IT Field?
            </h3>
            <p className="text-gray-300 mt-3 leading-relaxed">
              Because I want to grow in an environment where innovation,
              problem-solving, and continuous learning never stop. I want to
              build real-world projects, collaborate with talented developers,
              be part of a strong tech community, and keep upgrading myself
              every single day — both professionally and personally.
            </p>

            <p className="text-blue-400 font-semibold mt-4 text-lg">
              Learning &gt; Knowing Everything
            </p>
          </motion.div>
          <div className="mt-14">
            <div className="relative border-l border-gray-700 ml-4">
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
                  Final Year Mechanical Engineering Student who discovered a
                  deep passion for Web Development and decided to chase it with
                  full dedication.
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
                  Successfully completed internship at Therm X Industrial
                  Equipments Pvt. Ltd. where I worked on a real company problem
                  and contributed with a working web application.
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
                  Developed a Stock Management Website with clean UI,
                  performance focus, and practical usability to support company
                  operations.
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
                  Start my IT journey, gain real-world exposure, work on
                  impactful projects, strengthen my technical depth, actively
                  learn from experienced developers, and grow into a confident,
                  skilled and responsible Frontend Developer.
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
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
