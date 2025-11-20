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
          href="/My-Portfolio/public/Anuj_Lowanshi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
            <svg 
      className="icon" 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
        </a>

        <a
          className="btn"
          href="/My-Portfolio/public/Anuj_Lowanshi_Resume.pdf"
          download
        >
          Download Resume
          <svg 
      className="icon" 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <polyline points="5 12 12 19 19 12" />
      <rect x="5" y="19" width="14" height="2" />
    </svg>
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
