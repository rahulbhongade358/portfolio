import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaUserTie,
  FaIndustry,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMailClick = () => {
    if (!mail.name || !mail.email || !mail.message) {
      toast.error("Please fill all fields.");
      return;
    }

    toast.success("Opening Gmail...");

    const url =
      `https://mail.google.com/mail/?view=cm&fs=1&to=rahulbhonghade@gmail.com` +
      `&su=Graduate Engineer Trainee Opportunity` +
      `&body=${encodeURIComponent(
        `Name : ${mail.name}

Email : ${mail.email}

Message :
${mail.message}`,
      )}`;

    setTimeout(() => {
      window.open(url, "_blank");
    }, 1200);
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black text-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center"
          >
            Contact <span className="text-blue-400">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-gray-400 mt-5 max-w-3xl mx-auto leading-8"
          >
            I am currently open to opportunities as a Graduate Engineer Trainee,
            Mechanical Design Engineer, Production Engineer, Manufacturing
            Engineer, Quality Engineer, Maintenance Engineer, HVAC Engineer and
            Mechanical Engineering roles.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-10 mt-16">
            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <FaUserTie className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold">Career Objective</h3>

                <p className="text-gray-400 mt-4 leading-8">
                  Looking for Graduate Engineer Trainee opportunities where I
                  can apply my engineering knowledge while continuously learning
                  from experienced professionals.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <FaIndustry className="text-4xl text-green-400 mb-4" />

                <h3 className="text-2xl font-bold">Interested Domains</h3>

                <div className="flex flex-wrap gap-3 mt-5">
                  {[
                    "Mechanical Design",
                    "Production",
                    "Manufacturing",
                    "Quality",
                    "Maintenance",
                    "HVAC",
                    "Building Services",
                    "Data Centers",
                  ].map((item) => (
                    <span
                      key={item}
                      className="bg-gray-800 border border-gray-700 rounded-full px-4 py-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <FaMapMarkerAlt className="text-4xl text-orange-400 mb-4" />

                <h3 className="text-2xl font-bold">Availability</h3>

                <p className="text-gray-400 mt-4">
                  Available for Full-Time Graduate Engineer Trainee positions
                  across India.
                </p>
              </div>
            </motion.div>

            {/* Right */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold flex items-center gap-3 mb-8">
                <FaEnvelope className="text-blue-400" />
                Send a Message
              </h3>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={mail.name}
                  onChange={(e) => setMail({ ...mail, name: e.target.value })}
                  className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-blue-500 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={mail.email}
                  onChange={(e) => setMail({ ...mail, email: e.target.value })}
                  className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-blue-500 outline-none"
                />

                <textarea
                  rows="6"
                  placeholder="Message"
                  value={mail.message}
                  onChange={(e) =>
                    setMail({ ...mail, message: e.target.value })
                  }
                  className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-blue-500 outline-none"
                />

                <button
                  onClick={handleMailClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-xl font-semibold"
                >
                  Send Message
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Toaster position="top-center" />
    </>
  );
};

export default Contact;
