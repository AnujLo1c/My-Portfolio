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
        

          <p>
            I’m <strong>Anuj Lowanshi</strong>, a passionate mobile and backend developer with hands-on experience in Spring Boot,Flutter, and scalable application development. I enjoy solving real-world problems and focus on writing clean, maintainable, and production-ready code. My internship at Hexalitics Technology Pvt. Ltd. gave me the opportunity to work closely with senior engineers, where I strengthened my skills in debugging, performance tuning, and API integration while contributing to live projects.

          </p>

          <p>
            
I’m highly adaptable and continuously improving through AI-assisted learning, documentation-first research, and project-based experimentation. Currently, I’m expanding my full-stack capabilities by learning React, while also building personal projects to sharpen my system design, problem-solving, and software engineering fundamentals. I enjoy taking initiative, learning fast, and working in environments that challenge me to grow as a developer.
          </p>
        </div>

        {/* RIGHT — EDUCATION + DETAILS */}
        <div className="about-right">

          <div className="about-card">
            <h3>Education</h3>
            <p><strong>B.Tech — Computer Science</strong></p>
            <p>Shri Vaishnav Institute of Information Technology, Indore</p>
            <p>2015 – 2025 (expected)</p>
          </div>

          <div className="about-card">
            <h3>Personal Details</h3>
            <ul>
              <li><strong>Name:</strong> Anuj Lowanshi</li>
              <li><strong>Location:</strong> Indore, India</li>
              <li><strong>Email:</strong> anujlowanshi3@gmail.com</li>
              <li><strong>Phone:</strong> 7000664670</li>
              <li><strong>Languages:</strong> English, Hindi</li>
              <li><strong>Interests:</strong> Mobile Apps, Backend Systems, Cloud, System Design</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
