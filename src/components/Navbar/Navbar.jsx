// src/components/Navbar/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeDropdown from "../ThemeDropdown/ThemeDropdown";

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

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [active, setActive] = useState("home");

  const lastScroll = useRef(0);
  const ticking = useRef(false);

  /* ------------------------------------------------------------------
     🟦 DEBUG 1 — Scroll Listener + Scroll Direction
  --------------------------------------------------------------------*/
useEffect(() => {
  const mainEl = document.getElementById("page-main");

  if (!mainEl) {
    console.log("[DEBUG] ERROR: #page-main NOT FOUND");
    return;
  }

  console.log("[DEBUG] Listener attached to <main>");

  const handleScroll = () => {
    console.log("[DEBUG] SCROLL fired → main.scrollTop =", mainEl.scrollTop);

    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const current = mainEl.scrollTop;
      const previous = lastScroll.current;

      const diff = current - previous;
      const SENSITIVITY = 10;

      if (diff > SENSITIVITY && current > 50) {
        console.log("[DEBUG] → DOWN → hide navbar");
        setShowNav(false);
      } else if (diff < -SENSITIVITY) {
        console.log("[DEBUG] → UP → show navbar");
        setShowNav(true);
      }

      lastScroll.current = current;
      ticking.current = false;
    });
  };

  mainEl.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    mainEl.removeEventListener("scroll", handleScroll);
    console.log("[DEBUG] Listener removed from <main>");
  };
}, []);

  /* ------------------------------------------------------------------
     🟩 DEBUG 2 — showNav state tracker
  --------------------------------------------------------------------*/
  useEffect(() => {
    console.log("[DEBUG] showNav STATE =", showNav ? "VISIBLE" : "HIDDEN");
  }, [showNav]);

  /* ------------------------------------------------------------------
     🟨 DEBUG 3 — Active section tracking
  --------------------------------------------------------------------*/
  useEffect(() => {
    const elements = sections.map((s) => document.getElementById(s.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("[DEBUG] Active section:", entry.target.id);
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    elements.forEach((el) => el && observer.observe(el));
    console.log("[DEBUG] IntersectionObserver attached");

    return () => {
      observer.disconnect();
      console.log("[DEBUG] IntersectionObserver detached");
    };
  }, []);

  /* ------------------------------------------------------------------
     🟧 DEBUG 4 — DOM existence & duplicate navbars check
  --------------------------------------------------------------------*/
  useEffect(() => {
    const count = document.querySelectorAll(".navbar").length;
    console.log(`[DEBUG] Navbar elements in DOM: ${count}`);
  });

  /* ------------------------------------------------------------------
     Smooth scroll on nav click
  --------------------------------------------------------------------*/
  const handleClick = (id) => {
    console.log("[DEBUG] Nav clicked →", id);
    const el = document.getElementById(id);
    if (!el) {
      console.log("[DEBUG] ERROR → Section ID not found:", id);
      return;
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ------------------------------------------------------------------
     🟥 DEBUG 5 — AnimatePresence mount/unmount
  --------------------------------------------------------------------*/
  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          key="navbar"
          className="navbar container"
          initial={{ y: -90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onAnimationStart={() => console.log("[DEBUG] Navbar animation START")}
          onAnimationComplete={() =>
            console.log("[DEBUG] Navbar animation COMPLETE")
          }
        >
          {/* BRAND */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: 0.4,
              }}
            >
              Anuj Lowanshi
            </div>
          </div>

          {/* NAV LINKS */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                display: "flex",
                gap: 6,
                alignItems: "center",
              }}
            >
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

            {/* THEME SWITCHER */}
            <ThemeDropdown />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
