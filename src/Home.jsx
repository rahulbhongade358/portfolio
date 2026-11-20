import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTools, FaIndustry, FaDraftingCompass, FaCog, FaGraduationCap, FaExternalLinkAlt, FaCertificate } from "react-icons/fa";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import heroimage from "./assets/Image/heroimage.png";
import certificate1 from "./assets/Certificatesimg/certificate1.jpg";
import certificate2 from "./assets/Certificatesimg/certificate2.jpg";
import certificate3 from "./assets/Certificatesimg/certificate3.jpg";
import resumePdf from "./assets/Resume/RahulBhongadeResume.pdf";

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const SectionTitle = ({ eyebrow, title, accent, copy }) => (
  <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title} <span>{accent}</span></h2>
    {copy && <p className="section-copy">{copy}</p>}
  </div>
);

const Home = () => {
  const skills = [
    { title: "CAD & Drafting", icon: <FaDraftingCompass />, items: ["AutoCAD", "SolidWorks", "Engineering Drawing", "2D Drafting", "3D Modelling"] },
    { title: "Industrial & CNC", icon: <FaIndustry />, items: ["CNC Machine Installation", "Machine Setup Support", "Service & Maintenance Support", "Industrial Equipment", "Manufacturing Processes"] },
    { title: "Core Mechanical", icon: <FaCog />, items: ["Thermodynamics", "Refrigeration & Air Conditioning", "Strength of Materials", "Machine Design", "Engineering Mechanics"] },
    { title: "Workplace & Digital", icon: <FaTools />, items: ["MS Excel", "Technical Documentation", "Machine Status Reporting", "Team Coordination", "Problem Solving"] },
  ];
  const projects = [
    { no: "01", type: "Academic Major Project", title: "Automated Waste Collection & Monitoring System", text: "A team project focused on an automated waste collection and monitoring concept. Contributed to the mechanical structure, component selection, fabrication, integration and testing activities.", tags: ["Mechanical Design", "Fabrication", "Automation"] },
    { no: "02", type: "Industrial Internship Project", title: "Digital Stock Management System", text: "Worked on a digital stock-management solution for MS sheets, supporting inventory visibility and documentation of sheet stock in the industrial workflow.", tags: ["Inventory Workflow", "Documentation", "Process Improvement"] },
    { no: "03", type: "Academic Project", title: "Study & Fabrication of Earth Auger Machine", text: "Studied and participated in the design and fabrication of an earth-auger machine, gaining practical exposure to mechanical components, assembly and manufacturing processes.", tags: ["Machine Design", "Fabrication", "Assembly"] },
  ];
  const certificates = [
    { title: "Industrial Solution Certificate", image: certificate1 },
    { title: "Internship Completion Certificate", image: certificate2 },
    { title: "Industry Savings Certificate", image: certificate3 },
  ];
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid">
            <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
              <p className="eyebrow"><span className="status-dot" /> MECHANICAL ENGINEERING · INDUSTRIAL EXPERIENCE</p>
              <h1>Rahul <span>Bhongade</span></h1>
              <p className="hero-role">Mechanical Engineer <i>·</i> CNC Installation & Service <i>·</i> CAD Design</p>
              <p className="hero-description">Mechanical Engineering graduate with hands-on industrial exposure in CNC machine installation and service activities, supported by a foundation in manufacturing, mechanical systems and CAD tools. Interested in contributing across engineering, production, manufacturing, maintenance and project environments.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#experience">Explore Experience <FaArrowRight /></a>
                <a className="button button-outline" href={resumePdf} download="Rahul_Bhongade_Resume.pdf"><FaDownload /> Download Resume</a>
              </div>
              <div className="hero-meta">
                <span><FaMapMarkerAlt /> Nagpur, Maharashtra, India</span>
                <span><FaGraduationCap /> B.Tech Mechanical Engineering · 2026</span>
              </div>
            </motion.div>
            <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              <div className="portrait-frame"><img src={heroimage} alt="Rahul Bhongade" /></div>
              <div className="portrait-label"><span className="label-kicker">ENGINEERING MINDSET</span><strong>Learn · Build · Improve</strong></div>
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            </motion.div>
          </div>
          <div className="hero-bottom"><span>PORTFOLIO / 2026</span><span>SCROLL TO EXPLORE <span className="scroll-line" /></span></div>
        </section>

        <section id="about" className="content-section about-section">
          <div className="section-wrap">
            <SectionTitle eyebrow="01 / PROFILE" title="Engineering with a" accent="practical mindset." copy="A combination of engineering fundamentals, industrial exposure and a willingness to keep learning." />
            <div className="about-layout">
              <motion.div className="about-statement" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="large-quote">“</span>
                <h3>Curious about how machines work. Focused on making them work better.</h3>
                <p>I completed my B.Tech in Mechanical Engineering in 2026. My academic foundation includes manufacturing processes, engineering drawing, thermodynamics, machine design and refrigeration & air conditioning.</p>
                <p>Alongside this foundation, I have gained industrial experience at Therm-X Industrial Equipments Pvt. Ltd. and continue to build my capabilities in CAD, machine installation support, service work and technical documentation.</p>
              </motion.div>
              <div className="profile-facts">
                <div className="fact-card"><span>EDUCATION</span><strong>B.Tech</strong><p>Mechanical Engineering · 2026</p></div>
                <div className="fact-card"><span>CURRENT ROLE</span><strong>Sales & Service Engineer</strong><p>Therm-X Industrial Equipments Pvt. Ltd.</p></div>
                <div className="fact-card"><span>TECHNICAL INTERESTS</span><strong>Design · Production · Service</strong><p>Manufacturing, HVAC and industrial systems</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="content-section experience-section">
          <div className="section-wrap">
            <SectionTitle eyebrow="02 / EXPERIENCE" title="From classroom to" accent="shop floor." copy="Professional and academic milestones that have shaped my engineering journey." />
            <div className="timeline">
              <motion.article className="timeline-item" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="timeline-date">SEP 2026 — PRESENT</div>
                <div className="timeline-card featured-card">
                  <div className="timeline-top"><div><p className="card-kicker">PROFESSIONAL EXPERIENCE</p><h3>Sales & Service Engineer</h3><p className="company-name">Therm-X Industrial Equipments Pvt. Ltd.</p></div><span className="experience-mark"><FaIndustry /></span></div>
                  <p className="timeline-summary">Working in an industrial equipment environment, with involvement in CNC machine installation and service-related activities.</p>
                  <ul className="experience-list">
                    <li>Support CNC machine installation activities at customer sites.</li>
                    <li>Assist with machine setup, operational checks and service coordination.</li>
                    <li>Observe and support machine issue reporting and troubleshooting workflows.</li>
                    <li>Prepare and maintain machine-status and service-related documentation.</li>
                  </ul>
                  <div className="tag-row"><span>CNC Equipment</span><span>Installation Support</span><span>Service Operations</span><span>Technical Reporting</span></div>
                </div>
              </motion.article>
              <motion.article className="timeline-item" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="timeline-date">B.TECH · 2026</div>
                <div className="timeline-card"><p className="card-kicker">EDUCATION</p><h3>Bachelor of Technology — Mechanical Engineering</h3><p className="company-name">G.H. Raisoni College of Engineering, Nagpur</p><p className="timeline-summary">Built a foundation in mechanical engineering principles through coursework, laboratory work and academic projects.</p></div>
              </motion.article>
              <motion.article className="timeline-item" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="timeline-date">INDUSTRIAL INTERNSHIP</div>
                <div className="timeline-card"><p className="card-kicker">EARLIER INDUSTRY EXPOSURE</p><h3>Industrial Internship</h3><p className="company-name">Therm-X Industrial Equipments Pvt. Ltd.</p><p className="timeline-summary">Gained exposure to industrial workflow, inventory processes, documentation and the operating environment of industrial equipment.</p></div>
              </motion.article>
            </div>
          </div>
        </section>

        <section id="skills" className="content-section skills-section">
          <div className="section-wrap">
            <SectionTitle eyebrow="03 / CAPABILITIES" title="Technical skills &" accent="engineering foundation." copy="A practical mix of CAD tools, mechanical fundamentals and industrial work exposure." />
            <div className="skills-grid">{skills.map((group, index) => <motion.div className="skill-card" key={group.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.07 }}><div className="skill-card-head"><span>{group.icon}</span><h3>{group.title}</h3></div><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></motion.div>)}</div>
            <p className="skills-note">Skill levels are not rated on this page; the listed areas reflect tools, subjects and work activities in my current learning and experience.</p>
          </div>
        </section>

        <section id="projects" className="content-section projects-section">
          <div className="section-wrap">
            <SectionTitle eyebrow="04 / SELECTED WORK" title="Projects that built my" accent="engineering perspective." copy="Academic and industrial work demonstrating design thinking, practical learning and process awareness." />
            <div className="projects-grid">{projects.map((project, index) => <motion.article className="project-card" key={project.no} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.08 }}><div className="project-top"><span>{project.no}</span><span>{project.type}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></motion.article>)}</div>
          </div>
        </section>

        <section id="certificates" className="content-section certificates-section">
          <div className="section-wrap">
            <SectionTitle eyebrow="05 / CREDENTIALS" title="Training &" accent="certificates." copy="Selected certificates and internship recognition from my learning journey." />
            <div className="cert-grid">{certificates.map((certificate, index) => <motion.figure className="cert-card" key={certificate.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.08 }}><img src={certificate.image} alt={certificate.title} loading="lazy" /><figcaption><FaCertificate /> {certificate.title}</figcaption></motion.figure>)}</div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-wrap contact-wrap">
            <div><p className="eyebrow">06 / LET’S CONNECT</p><h2>Let’s build something<br /><span>meaningful.</span></h2><p className="contact-copy">Open to opportunities across mechanical engineering, production, manufacturing, service, maintenance and related engineering domains.</p></div>
            <div className="contact-panel"><a href="mailto:rahulbhonghade@gmail.com"><FaEnvelope /> <span><small>EMAIL</small>rahulbhonghade@gmail.com</span><FaExternalLinkAlt /></a><div className="contact-location"><FaMapMarkerAlt /> <span><small>LOCATION</small>Nagpur, Maharashtra, India</span></div><a href="https://rahulbhongadeportfolio.netlify.app/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /> <span><small>PORTFOLIO</small>rahulbhongadeportfolio.netlify.app</span><FaArrowRight /></a><a className="button button-primary contact-resume-button" href={resumePdf} download="Rahul_Bhongade_Resume.pdf"><FaDownload /> Download Resume (PDF)</a></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
