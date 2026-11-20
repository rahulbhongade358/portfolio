import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCog } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    ["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"], ["Projects", "#projects"], ["Certificates", "#certificates"],
  ];
  return <nav className="site-nav"><div className="nav-inner"><a href="#home" className="brand"><span className="brand-icon"><FaCog /></span><span>RAHUL<span className="brand-dot">.</span><small>MECHANICAL ENGINEER</small></span></a><div className="nav-links">{links.map(([name, href]) => <a key={name} href={href}>{name}</a>)}</div><a className="nav-contact" href="#contact">Let’s Talk <span>↗</span></a><button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">{isOpen ? <HiX /> : <HiMenu />}</button></div><AnimatePresence>{isOpen && <motion.div className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>{links.map(([name, href]) => <a key={name} href={href} onClick={() => setIsOpen(false)}>{name}</a>)}<a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></motion.div>}</AnimatePresence></nav>;
};
export default Navbar;
