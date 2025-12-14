import React, { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null); // <-- mobile toggle

  const projects = [
    {
      name: "CodeSync - Collaborative Code Editor",
      tech: ["Java", "Spring Boot", "WebSocket","JWT", "REST API", "MongoDB", "Spring Security"],
      desc: "Developed a real-time collaboration platform enabling multiple users to code. Designed backend APIs with low-latency WebSocket sync. Integrated JWT auth with Spring Security to ensure user data protection and security.",
      link: "https://github.com/AnujLo1c/CollaborativeCodeEditor-backend"
    },
    {
      name: "PetKart – Pet Adoption & E-Store",
      tech: ["Java", "Spring Boot", "Flutter", "Dart", "Firebase", "SQLite"],
      desc: "Built a platform for pet adoption, sales, and community features. Developed vendor and user apps with secure authentication and order management.",
      link: "https://github.com/AnujLo1c/PetKart"
    },
    {
      name: "Hum Chale – Travel Management App",
      tech: ["Java" ,"Spring Boot", "Flutter", "Firebase", "Dart", "Bloc", "Firebase"],
      desc: "The Hum Chale app simplifies hosting and joining trips by connecting users interested in small, budget-friendly travel. It also offers travel history, trip status, trip requests, and profile management to enhance the user experience.",
      link: "https://github.com/AnujLo1c/hum_chale"
    },
    {
      name: "Black N White - Blog Application",
      tech: ["Java","Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "Firebase", "GetX"],
      desc: "Developed a Monolithic blog platform supporting CRUD operations. Optimized data handling with MySQL and REST APIs. Showcased end-to-end development skills from backend to UI. ",
      link: "https://github.com/AnujLo1c/Black_N_White"
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
>
  <div
    className="card-content"
    onClick={() => toggleMobile(i)}
  >
    <h3>{p.name}</h3>

    <div className="tags">
      {p.tech.map((t, idx) => (
        <span key={idx}>{t}</span>
      ))}
    </div>

    <div className="mobile-expand">
      <p>{p.desc}</p>

      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-github-btn"
        onClick={(e) => e.stopPropagation()}
      >
        View on GitHub →
      </a>
    </div>
  </div>

  <div className="overlay">
    <p>{p.desc}</p>
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="view-btn"
    >
      View on GitHub →
    </a>
  </div>
</div>

        ))}
      </div>
    </div>
  );
}
