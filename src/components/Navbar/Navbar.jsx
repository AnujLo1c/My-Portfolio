// src/components/Navbar/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeDropdown from "../ThemeDropdown/ThemeDropdown";
import useTheme from "../../hooks/useTheme";   // <-- IMPORTANT
import "./Navbar.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "certification", label: "Certification" },
  { id: "contact", label: "Contact" },
];

// Color preview for mobile theme buttons
const themeColor = (theme) => {
  switch (theme) {
    case "light": return "#b9d9f9ff";
    case "dark": return "#323233ff";
    case "neon": return "#00ffccff";
    case "colorful": return "#fd9696ff";
    default: return "#aaa";
  }
};

// ...existing code...

export default function Navbar() {
  const { theme, setTheme, THEMES } = useTheme();

  const [showNav, setShowNav] = useState(true);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const lastScroll = useRef(0);
  const ticking = useRef(false);

  /* scroll hide & active section update */
  useEffect(() => {
    const mainEl = document.getElementById("page-main");
    if (!mainEl) return;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const current = mainEl.scrollTop;
        const previous = lastScroll.current;
        const diff = current - previous;
        const SENSITIVITY = 20;

        const heroHeight = document.getElementById("home")?.offsetHeight || 500;

        if (current < heroHeight - 50) {
          setShowNav(true);
          setActive("home");
          lastScroll.current = current;
          ticking.current = false;
          return;
        }

        if (diff > SENSITIVITY) {
          setShowNav(false);
        } else if (diff < -SENSITIVITY) {
          setShowNav(true);
        }

        // Update active section based on scroll position
        for (let section of sections) {
          const el = document.getElementById(section.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom > 150) {
              setActive(section.id);
              break;
            }
          }
        }

        lastScroll.current = current;
        ticking.current = false;
      });
    };

    mainEl.addEventListener("scroll", handleScroll);
    return () => mainEl.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);  // <-- ADD THIS
    setOpen(false);
    setThemeOpen(false);
  };

  // ...rest of code...

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

            {/* HAMBURGER MENU */}
            <div className="hamburger" onClick={() => setOpen(!open)}>
              ☰
            </div>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="mobile-menu">
              {sections.map((s) => (
                <button
                  key={s.id}
                  className={`nav-link ${active === s.id ? "active" : ""}`}
                  onClick={() => handleClick(s.id)}
                >
                  {s.label}
                </button>
              ))}

              {/* MOBILE THEME EXPAND SECTION */}
              <div className="mobile-theme-block">
                <button
                  className="mobile-theme-toggle"
                  onClick={() => setThemeOpen(prev => !prev)}
                >
                  Theme {themeOpen ? "▲" : "▼"}
                </button>

                {themeOpen && (
                  <div className="mobile-theme-options">
                    {THEMES.map((t) => (
                      <button
                        key={t}
                        className={`mobile-theme-btn ${theme === t ? "active" : ""}`}
                        style={{   background: "transparent",
    outline: `2px solid ${themeColor(t)}`, }}
                        onClick={() => {
                          setTheme(t);       // switch theme
                          setOpen(false);   // close menu
                          setThemeOpen(false);
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
