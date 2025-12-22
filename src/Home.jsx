import React from "react";
import Hero from "./sections/Hero/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./sections/About/About.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Skills from "./sections/Skills/Skills.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import Footer from "./components/Footer.jsx";

const Home = () => {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
