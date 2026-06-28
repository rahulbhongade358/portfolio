import React from "react";
import { motion } from "framer-motion";
import Resume from "../../components/Resume";
import {
  FaUserGraduate,
  FaBullseye,
  FaIndustry,
  FaBookOpen,
  FaCertificate,
  FaTools,
} from "react-icons/fa";

const timelineVariant = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mt-5 max-w-4xl mx-auto leading-8"
        >
          Mechanical Engineering Graduate passionate about Mechanical Design,
          Manufacturing, Production Engineering, HVAC Systems and Industrial
          Innovation. I enjoy solving engineering problems, learning new
          technologies and continuously improving my technical knowledge.
        </motion.p>

        {/* Professional Summary */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-gray-900 border border-gray-800 rounded-3xl p-8"
        >
          <h3 className="flex items-center gap-3 text-3xl font-bold text-blue-400">
            <FaUserGraduate />
            Professional Summary
          </h3>

          <p className="mt-6 text-gray-300 leading-8">
            I completed my Bachelor of Technology in Mechanical Engineering with
            a strong academic foundation in Thermodynamics, Manufacturing
            Processes, Engineering Drawing, Strength of Materials, Machine
            Design and Refrigeration & Air Conditioning.
          </p>

          <p className="mt-5 text-gray-300 leading-8">
            I am currently enhancing my CAD skills through AutoCAD and
            SolidWorks training at IGTR while developing practical knowledge in
            Mechanical Design, Production Engineering and Industrial
            Applications.
          </p>

          <p className="mt-5 text-gray-300 leading-8">
            I believe continuous learning, teamwork and problem solving are
            essential qualities for every engineer. My goal is to contribute to
            organizations where I can learn from experienced professionals while
            delivering value through dedication, discipline and technical
            excellence.
          </p>
        </motion.div>

        {/* Career Objective */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-linear-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl p-8"
        >
          <h3 className="flex items-center gap-3 text-3xl font-bold text-blue-400">
            <FaBullseye />
            Career Objective
          </h3>

          <p className="mt-6 text-gray-300 leading-8">
            Seeking opportunities as a Graduate Engineer Trainee, Mechanical
            Design Engineer, Production Engineer, Manufacturing Engineer,
            Maintenance Engineer or Quality Engineer where I can apply my
            engineering fundamentals, strengthen my practical skills and grow
            professionally.
          </p>

          <p className="mt-5 text-gray-300 leading-8">
            My long-term career interests include HVAC Engineering, Building
            Services, Mission Critical Infrastructure, Data Center Mechanical
            Systems and Energy Efficient Mechanical Design.
          </p>
        </motion.div>
        {/* Education & Internship Timeline */}

        <div className="mt-16 relative border-l-2 border-blue-500 ml-4">
          <motion.div
            variants={timelineVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            className="relative mb-12 ml-8"
          >
            <div className="absolute -left-11 w-6 h-6 rounded-full bg-blue-500"></div>

            <h3 className="text-2xl font-bold text-blue-400">
              🎓 Bachelor of Technology
            </h3>

            <h4 className="text-xl mt-2">Mechanical Engineering (2026)</h4>

            <p className="text-gray-300 mt-4 leading-8">
              Developed strong engineering fundamentals through academic
              coursework in Thermodynamics, Engineering Mechanics, Manufacturing
              Processes, Strength of Materials, Machine Design, Engineering
              Drawing and Refrigeration & Air Conditioning.
            </p>
          </motion.div>

          <motion.div
            variants={timelineVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
            className="relative mb-12 ml-8"
          >
            <div className="absolute -left-11 w-6 h-6 rounded-full bg-green-500"></div>

            <h3 className="text-2xl font-bold text-green-400">🏭 Internship</h3>

            <h4 className="text-xl mt-2">
              Therm-X Industrial Equipments Pvt. Ltd.
            </h4>

            <p className="text-gray-300 mt-4 leading-8">
              Successfully completed an industrial internship where I gained
              exposure to industrial workflow, inventory management,
              documentation, teamwork and process improvement.
            </p>

            <ul className="mt-5 space-y-2 text-gray-300 list-disc list-inside">
              <li>Industrial Process Understanding</li>
              <li>Inventory Management</li>
              <li>Documentation & Reporting</li>
              <li>Professional Communication</li>
              <li>Team Collaboration</li>
              <li>Process Improvement</li>
            </ul>
          </motion.div>

          <motion.div
            variants={timelineVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            className="relative mb-12 ml-8"
          >
            <div className="absolute -left-11 w-6 h-6 rounded-full bg-orange-500"></div>

            <h3 className="text-2xl font-bold text-orange-400">
              📐 CAD Learning
            </h3>

            <h4 className="text-xl mt-2">Indo German Tool Room (IGTR)</h4>

            <p className="text-gray-300 mt-4 leading-8">
              Currently pursuing professional training in AutoCAD and SolidWorks
              to strengthen CAD modelling, drafting, engineering drawing and
              mechanical product design skills.
            </p>
          </motion.div>
        </div>

        {/* Certifications */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-4xl font-bold text-center">
            <span className="text-blue-400">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition">
              <FaCertificate className="text-5xl text-blue-400 mb-5" />

              <h3 className="text-2xl font-semibold">AutoCAD</h3>

              <p className="text-gray-400 mt-2">Indo German Tool Room (IGTR)</p>

              <span className="inline-block mt-5 bg-blue-600 px-4 py-2 rounded-full">
                Pursuing
              </span>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition">
              <FaCertificate className="text-5xl text-blue-400 mb-5" />

              <h3 className="text-2xl font-semibold">SolidWorks</h3>

              <p className="text-gray-400 mt-2">Indo German Tool Room (IGTR)</p>

              <span className="inline-block mt-5 bg-blue-600 px-4 py-2 rounded-full">
                Pursuing
              </span>
            </div>
          </div>
        </motion.div>

        {/* Currently Learning */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 bg-gray-900 border border-gray-800 rounded-3xl p-8"
        >
          <h2 className="flex items-center gap-3 text-3xl font-bold text-blue-400">
            <FaBookOpen />
            Currently Learning
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-black rounded-xl p-6 border border-gray-800">
              <h3 className="font-semibold text-xl">CAD Design</h3>

              <p className="text-gray-400 mt-3">
                AutoCAD, SolidWorks, Engineering Drawing, Mechanical Drafting.
              </p>
            </div>

            <div className="bg-black rounded-xl p-6 border border-gray-800">
              <h3 className="font-semibold text-xl">HVAC Engineering</h3>

              <p className="text-gray-400 mt-3">
                Refrigeration, Air Conditioning, Building Services and Energy
                Efficient Systems.
              </p>
            </div>

            <div className="bg-black rounded-xl p-6 border border-gray-800">
              <h3 className="font-semibold text-xl">Future Focus</h3>

              <p className="text-gray-400 mt-3">
                Mechanical Design, Data Center Infrastructure, Mission Critical
                Engineering.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Resume */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <Resume />
        </motion.div>

        {/* Call To Action */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <div className="bg-linear-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 border border-blue-500/30 rounded-3xl p-10 text-center">
            <h2 className="text-4xl font-bold">
              Ready to Begin My Engineering Career
            </h2>

            <p className="text-gray-300 max-w-4xl mx-auto mt-6 leading-8">
              I am actively seeking opportunities as a Graduate Engineer
              Trainee, Mechanical Design Engineer, Production Engineer,
              Manufacturing Engineer, Quality Engineer and Maintenance Engineer.
              I am passionate about continuous learning and excited to
              contribute to innovative engineering projects while building a
              successful professional career.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
              >
                View Engineering Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-xl font-semibold"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
