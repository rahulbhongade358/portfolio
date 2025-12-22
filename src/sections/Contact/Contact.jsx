import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMailClick = () => {
    toast.success("Opening Mail... 📧");
    const url =
      `https://mail.google.com/mail/?view=cm&fs=1&to=rahulbhonghade@gmail.com` +
      `&su=Internship Opportunity` +
      `&body=${encodeURIComponent(
        `Name: ${mail.name}\nEmail: ${mail.email}\n\nMessage:\n${mail.message}`
      )}`;
    window.open(url, "_blank");
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Navbar />

      <section
        id="contact"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-8 py-16 mt-5"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-blue-400">Me</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Feel free to reach out for internships, collaborations or just to
            say hello 😊
          </motion.p>

          <motion.div
            className="mt-10 bg-gray-800 p-8 rounded-2xl border border-gray-700"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="grid gap-6" variants={containerVariants}>
              <motion.input
                type="text"
                placeholder="Your Name"
                value={mail.name}
                onChange={(e) => setMail({ ...mail, name: e.target.value })}
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 outline-none focus:border-blue-400"
                variants={itemVariants}
              />

              <motion.input
                type="email"
                placeholder="Your Email"
                value={mail.email}
                onChange={(e) => setMail({ ...mail, email: e.target.value })}
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 outline-none focus:border-blue-400"
                variants={itemVariants}
              />

              <motion.textarea
                placeholder="Your Message"
                rows="5"
                value={mail.message}
                onChange={(e) => setMail({ ...mail, message: e.target.value })}
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 outline-none focus:border-blue-400"
                variants={itemVariants}
              ></motion.textarea>

              <motion.button
                type="button"
                onClick={handleMailClick}
                className="bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition w-full"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Toaster position="top-center" />
    </>
  );
};

export default Contact;
