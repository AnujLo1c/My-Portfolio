import React, { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null); // <-- mobile toggle

  const projects = [
    {
      name: "PetKart – Pet Adoption & E-Commerce App",
      tech: ["Flutter", "Firebase", "GetX"],
      desc: "A complete pet adoption + accessories store with chat, donation, and admin features.",
      link: "#"
    },
    {
      name: "AI Chat – Gemini + Local DB",
      tech: ["Flutter", "SQLite", "Gemini API"],
      desc: "AI Chat app with history, offline DB, and Lottie animations.",
      link: "#"
    },
    {
      name: "Hum Chale – Travel Group Planner",
      tech: ["Flutter", "Firebase"],
      desc: "Group travel planning app with budget tracking and trip management.",
      link: "#"
    },
    {
      name: "Speed Dating App",
      tech: ["Flutter", "Firebase", "GetX"],
      desc: "Real-time matching system with countdown timer and swipe logic.",
      link: "#"
    },
    {
      name: "Java Spring Boot API Suite",
      tech: ["Java", "Spring Boot", "MySQL"],
      desc: "REST APIs, authentication, CRUD operations, and complete backend data layer.",
      link: "#"
    },
    {
      name: "Pokémon Style 2v2 Game Backend",
      tech: ["Java", "Spring Boot"],
      desc: "Turn-based battle logic with PvP mechanics and real-time matchup system.",
      link: "#"
    }
  ];

  // Detect mobile
  const isMobile = window.innerWidth < 700;

  const toggleMobile = (index) => {
    if (!isMobile) return; // Desktop uses hover
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="projects-wrapper reveal">
      <h2 className="projects-title">
        Projects <span className="underline"></span>
      </h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`project-card ${openIndex === i ? "opened" : ""}`}
            onClick={() => toggleMobile(i)}
          >
            <div className="card-content">
              <h3>{p.name}</h3>

              <div className="tags">
                {p.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              {/* MOBILE EXPAND CONTENT */}
              <div className="mobile-expand">
                <p>{p.desc}</p>

                <button
                  className="mobile-github-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent closing toggle
                    window.open(p.link, "_blank");
                  }}
                >
                  View on GitHub →
                </button>
              </div>
            </div>

            {/* DESKTOP ONLY — HOVER OVERLAY */}
            <div className="overlay">
              <p>{p.desc}</p>
              <button className="view-btn">View on GitHub →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
