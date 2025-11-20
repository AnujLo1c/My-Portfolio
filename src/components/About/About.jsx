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
            I’m <strong>Anuj Lowanshi</strong>, a passionate mobile and backend developer
            specializing in <strong>Flutter</strong> and <strong>Java Spring Boot</strong>. 
            I enjoy building clean, scalable applications and solving challenging technical problems.
          </p>

          <p>
            I focus on writing structured, maintainable code and learning directly from official documentation
            rather than tutorials. I’ve worked on real-world projects during my internship at 
            <strong> Hexalitics Technology Pvt. Ltd.</strong> where I collaborated with senior developers 
            and improved debugging, performance tuning, and API integration skills.
          </p>

          <p>
            Currently, I'm expanding my full-stack capabilities by learning 
            <strong> Angular + TypeScript</strong> while continuing to build personal projects.
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
