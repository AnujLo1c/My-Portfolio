import React from "react";
import "./Certification.css";

export default function Certification() {
  const certs = [
    {
      title: "Joy of Computing using Python",
      issuer: "NPTEL",
      year: "2021",
      link: "#", // add certificate link
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      year: "2023",
      link: "#",
    },
    {
      title: "Java (Basic)",
      issuer: "LinkedIn",
      year: "2024",
      link: "#",
    },
    {
      title: "SQL (Basic)",
      issuer: "LinkedIn",
      year: "2024",
      link: "#",
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
