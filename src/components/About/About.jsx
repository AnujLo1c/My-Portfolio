import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-wrapper reveal">
 
      {/* Section Title */}
      <h2 className="about-title">
        About Me
        <span className="underline"></span>
      </h2>

      <div className="about-grid">

        {/* LEFT — SUMMARY */}
        <div className="about-card summary-card">
          <h3>Introduction</h3>
        
<div className="scroll-sec">
          <p>
            I’m <strong>Anuj Lowanshi</strong>, a passionate App and Backend Developer with hands-on experience in Spring Boot,Flutter, and scalable application development. I enjoy solving real-world problems and focus on writing clean, maintainable, and production-ready code. My internship at Hexalitics Technology Pvt. Ltd. gave me the opportunity to work closely with senior engineers, where I strengthened my skills in debugging, performance tuning, and API integration while contributing to live projects.

          </p>

          <p>
            
I’m highly adaptable and continuously improving through AI-assisted learning, documentation-first research, and project-based experimentation. Currently, I’m expanding my full-stack capabilities by learning React, while also building personal projects to sharpen my system design, problem-solving, and software engineering fundamentals. I enjoy taking initiative, learning fast, and working in environments that challenge me to grow as a developer.
          </p>
          </div>
        </div>

        {/* RIGHT — EDUCATION + DETAILS */}
        <div className="about-right">

          <div className="about-card">
  <h3>Education</h3>

  <div className="edu-item">
    <p className="edu-title"><strong>B.Tech (Computer Science) - 77%</strong></p>
    <span className="edu-year">2021 – 2025</span>
  </div>
  <p>Shri Vaishnav Institute of Information Technology</p>

  <div className="edu-item">
    <p className="edu-title"><strong>HSC - 89%</strong></p>
    <span className="edu-year">2019 – 2021</span>
  </div>
  <p>Mount Carmel School</p>

  <div className="edu-item">
    <p className="edu-title"><strong>SSC - 89.2%</strong></p>
    <span className="edu-year">2017 – 2019</span>
  </div>
  <p>Mount Carmel School</p>
</div>


          <div className="about-card">
            <h3>Personal Details</h3>
            <ul>
             
              <li><strong>Location:</strong> Indore, India</li>
              <li><strong>Email:</strong> anujlowanshi3@gmail.com</li>
              <li><strong>Phone:</strong> 7000664670</li>
              <li><strong>Languages:</strong> English, Hindi</li>
             
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
