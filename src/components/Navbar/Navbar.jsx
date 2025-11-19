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
const [open, setOpen] = useState(false);

  const lastScroll = useRef(0);
  const ticking = useRef(false);

  /* ------------------------------------------------------------------
     🟦 DEBUG 1 — Scroll Listener + Scroll Direction
  --------------------------------------------------------------------*/
useEffect(() => {
  const mainEl = document.getElementById("page-main");

  
  const handleScroll = () => {
   
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const current = mainEl.scrollTop;
      const previous = lastScroll.current;

      const diff = current - previous;
      const SENSITIVITY = 20;

    
const heroHeight = document.getElementById("home")?.offsetHeight || 500;

// 2️⃣ IF USER IS IN HERO → ALWAYS SHOW NAVBAR
if (current < heroHeight - 50) {
  setShowNav(true);
  lastScroll.current = current;
  ticking.current = false;
  return;
}

// 3️⃣ NORMAL AUTO-HIDE AFTER HERO SECTION
if (diff > SENSITIVITY) {
  setShowNav(false); // scrolling down
} else if (diff < -SENSITIVITY) {
  setShowNav(true);  // scrolling up
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
          className="navbar "
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
  <div className="brand">
    <span className="logo-full">Anuj Lowanshi</span>
    
  </div>

  {/* RIGHT SIDE */}
  <div className="right-wrapper">
    {/* DESKTOP LINKS */}
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

    {/* THEME SWITCHER */}
   <div className="theme-desktop">
  <ThemeDropdown />
</div>


    {/* HAMBURGER */}
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
          onClick={() => {
            handleClick(s.id);
            setOpen(false);
          }}
        >
          {s.label}
        </button>
      ))}
      {/* MOBILE THEME TEXT */}
    <ThemeDropdown />
      {/* <ThemeDropdown /> */}
    </div>
  )}



        </motion.nav>
      )}
    </AnimatePresence>
  );
}
