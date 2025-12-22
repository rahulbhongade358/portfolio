import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-950 text-gray-400 text-center py-6 border-t border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p>© {new Date().getFullYear()} Rahul. All Rights Reserved.</p>
    </motion.footer>
  );
};

export default Footer;
