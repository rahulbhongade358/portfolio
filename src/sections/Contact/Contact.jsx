import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMailClick = async () => {
    try {
      if (!mail.name || !mail.email || !mail.message) {
        toast.error("Please fill in all fields.");
        return;
      }
      toast.success("Opening Mail... 📧");
      const url =
        `https://mail.google.com/mail/?view=cm&fs=1&to=rahulbhonghade@gmail.com` +
        `&su=Internship Opportunity` +
        `&body=${encodeURIComponent(
          `Name: ${mail.name}\nEmail: ${mail.email}\n\nMessage:\n${mail.message}`
        )}`;
      setTimeout(() => {
        window.open(url, "_blank");
      }, 2000);
    } catch (error) {}
  };
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-8 py-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-blue-400">Me</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Feel free to reach out for internships, collaborations or even a
            casual hello 😊
          </motion.p>
          <motion.div
            className="mt-10 bg-gray-900/40 backdrop-blur-xl p-10 rounded-2xl border border-gray-700 shadow-xl
            hover:shadow-blue-500/10 transition-all duration-500 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 hover:opacity-20 blur-3xl transition-all"></div>
            <motion.div className="grid gap-6 relative z-10">
              <motion.input
                type="text"
                placeholder="Your Name"
                value={mail.name}
                onChange={(e) => setMail({ ...mail, name: e.target.value })}
                className="p-4 rounded-lg bg-gray-900 border border-gray-700 text-white
                focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all
                hover:border-blue-400"
                variants={itemVariants}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                value={mail.email}
                onChange={(e) => setMail({ ...mail, email: e.target.value })}
                className="p-4 rounded-lg bg-gray-900 border border-gray-700 text-white
                focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all
                hover:border-blue-400"
                variants={itemVariants}
              />
              <motion.textarea
                placeholder="Your Message"
                rows="5"
                value={mail.message}
                onChange={(e) => setMail({ ...mail, message: e.target.value })}
                className="p-4 rounded-lg bg-gray-900 border border-gray-700 text-white
                focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all
                hover:border-blue-400"
                variants={itemVariants}
              ></motion.textarea>
              <motion.button
                type="button"
                onClick={handleMailClick}
                className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-all w-full
                shadow-md hover:shadow-blue-500/40 active:scale-95 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 bg-blue-400 opacity-0 hover:opacity-20 transition-all"></span>
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
