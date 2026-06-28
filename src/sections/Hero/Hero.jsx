import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaDraftingCompass,
  FaIndustry,
  FaSnowflake,
  FaTools,
  FaDownload,
  FaArrowRight,
  FaUserGraduate,
} from "react-icons/fa";

import heroimage from "./../../assets/Image/heroimage.png";

const Hero = () => {
  const blurAnim = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(6px)",
    },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.12,
        duration: 0.7,
      },
    }),
  };

  const skills = [
    {
      icon: <FaDraftingCompass />,
      text: "AutoCAD",
    },
    {
      icon: <FaDraftingCompass />,
      text: "SolidWorks",
    },
    {
      icon: <FaIndustry />,
      text: "Manufacturing",
    },
    {
      icon: <FaTools />,
      text: "Machine Design",
    },
    {
      icon: <FaSnowflake />,
      text: "HVAC",
    },
    {
      icon: <FaUserGraduate />,
      text: "Graduate Engineer Trainee",
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-black text-white flex flex-col lg:flex-row items-center justify-center gap-14 px-8 pt-24">
      {/* Left Side */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -15, 0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="relative"
      >
        <div
          className="
          w-72
          h-72
          md:w-96
          md:h-117.5
          rounded-[45%_70%_25%_60%]
          overflow-hidden
          bg-linear-to-br
          from-blue-500
          via-cyan-400
          to-blue-700
          shadow-[0_0_80px_rgba(59,130,246,0.35)]
        "
        >
          <img
            src={heroimage}
            alt="Rahul Bhongade"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gray-900 border border-blue-500 rounded-xl px-6 py-3 shadow-lg">
          <p className="font-semibold text-blue-400">
            B.Tech Mechanical Engineering
          </p>

          <p className="text-sm text-gray-400">Class of 2026</p>
        </div>
      </motion.div>

      {/* Right Side */}

      <div className="max-w-2xl">
        <motion.p
          variants={blurAnim}
          initial="hidden"
          animate="visible"
          custom={0}
          className="uppercase tracking-[4px] text-blue-400 font-semibold"
        >
          Welcome To My Portfolio
        </motion.p>

        <motion.h1
          variants={blurAnim}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl lg:text-6xl font-extrabold mt-4 leading-tight"
        >
          Rahul B.
          <span className="text-blue-400"> Bhongade</span>
        </motion.h1>

        <motion.div
          variants={blurAnim}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-2xl lg:text-3xl font-semibold mt-5 text-gray-300 h-12"
        >
          <TypeAnimation
            sequence={[
              "Mechanical Engineering Graduate",
              2200,
              "Aspiring Graduate Engineer Trainee",
              2200,
              "Future HVAC Engineer",
              2200,
              "Mechanical Design Enthusiast",
              2200,
            ]}
            speed={45}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={blurAnim}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-gray-400 leading-8 mt-8"
        >
          Passionate Mechanical Engineering Graduate with strong engineering
          fundamentals in Manufacturing Processes, Engineering Drawing,
          Thermodynamics and Refrigeration & Air Conditioning.
          <br />
          <br />
          Currently pursuing AutoCAD and SolidWorks at IGTR while seeking
          opportunities as a Graduate Engineer Trainee to contribute in
          Mechanical Design, Production, Quality, Manufacturing, HVAC and
          Mission Critical Infrastructure.
        </motion.p>
        <motion.div
          variants={blurAnim}
          initial="hidden"
          animate="visible"
          custom={4}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
              }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-center gap-3 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="text-blue-400 text-xl">{skill.icon}</span>

              <span className="text-sm font-medium">{skill.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={blurAnim}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex flex-wrap gap-5 mt-10"
        >
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
          >
            View Projects
            <FaArrowRight />
          </a>

          <a
            href="#resume"
            className="border border-blue-500 px-7 py-3 rounded-xl font-semibold hover:bg-blue-600 transition flex items-center gap-2"
          >
            <FaDownload />
            Download Resume
          </a>

          <a
            href="#contact"
            className="border border-gray-700 hover:border-blue-500 px-7 py-3 rounded-xl font-semibold transition"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={blurAnim}
          initial="hidden"
          animate="visible"
          custom={6}
          className="grid md:grid-cols-4 gap-4 mt-12"
        >
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
            <h2 className="text-3xl font-bold text-blue-400">2026</h2>

            <p className="text-gray-400 mt-2">
              Mechanical Engineering Graduate
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
            <h2 className="text-3xl font-bold text-blue-400">IGTR</h2>

            <p className="text-gray-400 mt-2">AutoCAD & SolidWorks</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
            <h2 className="text-3xl font-bold text-blue-400">3+</h2>

            <p className="text-gray-400 mt-2">Engineering Projects</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
            <h2 className="text-3xl font-bold text-blue-400">Open</h2>

            <p className="text-gray-400 mt-2">Graduate Engineer Trainee</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
