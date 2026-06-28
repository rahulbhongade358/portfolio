import React from "react";
import { FaDownload, FaEye, FaFileAlt, FaUserGraduate } from "react-icons/fa";
import RahulBhongadeResume from "../assets/Resume/RahulBhongadeResume.pdf";

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-10 shadow-2xl">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center">
              <FaFileAlt className="text-4xl text-white" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mt-6">
            My <span className="text-blue-400">Resume</span>
          </h2>

          <p className="text-gray-400 text-center mt-5 leading-8 max-w-3xl mx-auto">
            Download my ATS-friendly Mechanical Engineering Resume showcasing my
            education, internship, engineering projects, CAD learning, technical
            skills, and career objective for Graduate Engineer Trainee
            opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-black rounded-2xl border border-gray-700 p-6 text-center">
              <FaUserGraduate className="text-4xl text-blue-400 mx-auto mb-4" />

              <h3 className="text-xl font-semibold">Mechanical Engineering</h3>

              <p className="text-gray-400 mt-3">B.Tech Graduate (2026)</p>
            </div>

            <div className="bg-black rounded-2xl border border-gray-700 p-6 text-center">
              <FaFileAlt className="text-4xl text-green-400 mx-auto mb-4" />

              <h3 className="text-xl font-semibold">ATS Friendly</h3>

              <p className="text-gray-400 mt-3">Optimized for Recruiters</p>
            </div>

            <div className="bg-black rounded-2xl border border-gray-700 p-6 text-center">
              <FaDownload className="text-4xl text-orange-400 mx-auto mb-4" />

              <h3 className="text-xl font-semibold">Ready to Download</h3>

              <p className="text-gray-400 mt-3">PDF Resume</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <a
              href={RahulBhongadeResume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
            >
              <FaEye />
              Preview Resume
            </a>

            <a
              href={RahulBhongadeResume}
              download
              className="flex items-center gap-3 border border-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-xl font-semibold"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
