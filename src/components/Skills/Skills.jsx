import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills-wrapper">
       <h2 className="skills-title reveal">
    Skills
    <span className="underline"></span>
  </h2>

      <div className="skills-grid">

        <div className="skill-card reveal">
          <div className="accent"></div>
          <div className="content">
            <h3>Languages</h3>
            <div className="tags">
              <span>Java</span>
              <span>SQL</span>
              <span>JavaScript</span>
              <span>Dart</span>
            </div>
          </div>
        </div>

        <div className="skill-card reveal">
          <div className="accent"></div>
          <div className="content">
            <h3>Frameworks</h3>
            <div className="tags">
              <span>Spring Boot</span>

              <span>Flutter</span>
            </div>
          </div>
        </div>

        <div className="skill-card reveal">
          <div className="accent"></div>
          <div className="content">
            <h3>Databases</h3>
            <div className="tags">
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Firestore</span>
         
            </div>
          </div>
        </div>

        <div className="skill-card reveal">
          <div className="accent"></div>
          <div className="content">
            <h3>Cloud & DevOps</h3>
            <div className="tags">
              
              <span>Firebase</span>
              <span>Docker</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </div>
        </div>

        <div className="skill-card reveal">
          <div className="accent"></div>
          <div className="content">
            <h3>Core Skills</h3>
            <div className="tags">
              <span>Problem Solving</span>
              <span>Debugging</span>
              <span>SDLC</span>
              <span>Agile</span>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
