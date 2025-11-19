import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeDropdown from "../ThemeDropdown/ThemeDropdown";
import "./ThemeDropdown.css";


const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "certification", label: "Certification" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const lastScroll = useRef(0);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          key="navbar"
          className="navbar"
          initial={{ y: -90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* BRAND */}
          <div className="brand">
            <span className="logo-full">Anuj Lowanshi</span>
          </div>

          {/* RIGHT SIDE */}
          <div className="right-wrapper">

            {/* DESKTOP NAV LINKS */}
            <div className="nav-links">
              {sections.map((s) => (
                <button
                  key={s.id}
                  className={`nav-link ${active === s.id ? "active" : ""}`}
                  onClick={() => handleClick(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* DESKTOP THEME DROPDOWN */}
            <div className="theme-desktop">
              <ThemeDropdown />
            </div>

            {/* HAMBURGER ICON (mobile) */}
            <div className="hamburger" onClick={() => {
              setOpen(!open);
              setThemeOpen(false);
            }}>
              ☰
            </div>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="mobile-menu">
              {sections.map((s) => (
                <button
                  key={s.id}
                  className="mobile-link"
                  onClick={() => {
                    handleClick(s.id);
                    setOpen(false);
                  }}
                >
                  {s.label}
                </button>
              ))}

              {/* MOBILE THEME ACCORDION */}
              <div className="mobile-theme-section">
                <button
                  className="mobile-theme-toggle"
                  onClick={() => setThemeOpen((prev) => !prev)}
                >
                  Theme {themeOpen ? "▲" : "▼"}
                </button>

                {themeOpen && (
                  <div className="mobile-theme-list">
                    {["light", "dark", "neon", "solar"].map((t) => (
                      <button
                        key={t}
                        className="mobile-theme-item"
                        onClick={() => {
                          document.documentElement.setAttribute("data-theme", t);
                          setOpen(false);       // close menu
                          setThemeOpen(false);  // collapse
                        }}
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
