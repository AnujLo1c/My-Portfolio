import React from "react";
import "./Certification.css";

export default function Certification() {
  const certs = [
    {
      title: "MySQL Implementation Certified Associate",
      issuer: "Oracle",
      year: "2025",
      link: "/My-Portfolio/certificates/MySQL.pdf", 
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      year: "2023",
      link: "/My-Portfolio/certificates/Cloud_Computing.pdf",
    },
    {
      title: "Cloud Computing using AWS",
      issuer: "Ardent",
      year: "2024",
      link: "/My-Portfolio/certificates/AWS.pdf",
    },
    {
      title: "Learning Java",
      issuer: "LinkedIn",
      year: "2024",
      link: "/My-Portfolio/certificates/Java.pdf",
    }
  ];

  return (
    <div className="cert-wrapper reveal">
      <h2 className="cert-title">
        Certifications
        <span className="underline"></span>
      </h2>

      <div className="cert-grid">
        {certs.map((c, i) => (
          <div className="cert-card" key={i}>
            <h3>{c.title}</h3>
            <p className="issuer">{c.issuer} • {c.year}</p>

            {c.link !== "#" ? (
              <a
                className="view-btn"
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            ) : (
              <button className="view-btn disabled">Certificate Coming Soon</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
