import React from "react";
import RahulBhongadeResume from "./../assets/Resume/RahulBhongadeResume.pdf";
const Resume = () => {
  return (
    <>
      <section id="resume" style={{ padding: "50px", textAlign: "center" }}>
        <p>Click below to preview or download my resume.</p>
        <div className="mt-5">
          <a
            href={RahulBhongadeResume}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Preview Resume
          </a>
          <a
            href={RahulBhongadeResume}
            download
            style={{
              padding: "10px 20px",
              backgroundColor: "#2196F3",
              color: "white",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Download Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default Resume;
