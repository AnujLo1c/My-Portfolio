import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-wrapper reveal">

      {/* Section Title */}
      <h2 className="resume-title">
        Resume
        <span className="underline"></span>
      </h2>

      {/* Buttons */}
      <div className="resume-buttons">
        <a
          className="btn primary"
          href="/Anuj_Lowanshi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>

        <a
          className="btn"
          href="/Anuj_Lowanshi_Resume.pdf"
          download
        >
          Download Resume
        </a>
      </div>

<h3 className="resume-title">
        Experience
        <span className="underline"></span>
      </h3>
      {/* Single Experience Box */}
      <div className="experience-card">
        <h3>Android Developer Intern</h3>
        <p className="company">Hexalitics Technology Pvt. Ltd (Jan – May 2025)</p>

        <ul>
          <li>Contributed to Android application development using Flutter, Java, and Firebase.</li>
          <li>Collaborated with senior developers to enhance features, fix bugs, and optimize performance.</li>
        </ul>
      </div>

    </div>
  );
}
