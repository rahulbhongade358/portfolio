import React from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroimage from "./../../assets/Image/heroimage.png";
const Hero = () => {
  const blurAnim = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen text-white flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-950 pt-20 px-8">
        <motion.div
          className="
       w-65 h-65
      sm:w-75 sm:h-75
      md:w-90 md:h-90
      lg:w-100 lg:h-122.5
      bg-linear-to-br from-blue-300 to-purple-500
      flex items-center justify-center
      rounded-[44%_79%_21%_60%]
      shadow-[0_0_80px_rgba(255,200,0,0.3)]
      overflow-hidden
    "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0, 20, 0],
            rotate: [-4, 2, -3, 3, -2],
          }}
          transition={{
            duration: 6,
            repeat: 2,
            ease: "easeInOut",
          }}
        >
          <img src={heroimage} alt="" className="w-full h-full object-fill" />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.h1
            variants={blurAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={0}
            className="text-white text-5xl md:text-6xl font-bold"
          >
            Hi, I'm{" "}
            <span className="text-blue-400">
              <TypeAnimation
                sequence={[
                  "Rahul",
                  2000,
                  "A Web Developer",
                  2000,
                  "A Learner",
                  2000,
                  "Rahul",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </span>
          </motion.h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 perspective-1000">
            {[
              "Frontend Developer",
              "React",
              "JavaScript",
              "Backend",
              "MongoDB",
              "ExpressJS",
            ].map((tag, i) => (
              <motion.div
                key={i}
                variants={blurAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                custom={i + 1}
                whileHover={{
                  scale: 1.18,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="relative group text-gray-300 text-lg font-medium bg-gray-800 p-4 rounded-xl text-center border border-gray-700 shadow-xl"
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const rotateX = (y / rect.height - 0.5) * -20;
                  const rotateY = (x / rect.width - 0.5) * 20;

                  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.12)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-linear-to-tr from-white/20 to-transparent mix-blend-overlay"></span>
                {tag}
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={blurAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={7}
            className="text-gray-400 mt-5 max-w-lg"
          >
            I build clean, modern and user-friendly web applications. Currently
            looking for opportunities to learn, grow and contribute.
          </motion.p>
          <motion.div
            className="mt-6 flex gap-6 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.a
              href="#projects"
              variants={blurAnim}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring" }}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              variants={blurAnim}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring" }}
              className="border border-blue-400 hover:bg-blue-600 bg-blue-400 hover:border-blue-600 px-6 py-3 rounded-lg font-semibold transition"
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
