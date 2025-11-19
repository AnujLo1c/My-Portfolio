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
    <div className="theme-dropdown" ref={dropdownRef}>
      <button
  className="theme-btn"
  onClick={() => setOpen(prev => !prev)}
  aria-label="Choose theme"
  aria-haspopup="true"
  aria-expanded={open}
>
  <div className="theme-icon-wrapper">
  <svg  viewBox="0 0 48 48" width="30" height="30" aria-hidden="true" focusable="false" className="theme-icon">
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.2" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    
    <circle cx="24" cy="24" r="11.2" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.95" />

   
    <circle className="sw sw1" cx="32" cy="18" r="3.2" />
    <circle className="sw sw2" cx="20" cy="14" r="2.6" />
    <circle className="sw sw3" cx="15" cy="28" r="2.6" />
    <circle className="sw sw4" cx="30" cy="32" r="3.0" />

    
    <g className="spark" transform="translate(24 8)">
      <path d="M0 -3 L1 -1 L3 0 L1 1 L0 3 L-1 1 L-3 0 L-1 -1 Z" fill="currentColor" opacity="0.9" transform="scale(0.6)"/>
    </g>
  </svg>
  </div>
  <div className="theme-text-wrapper" >Theme</div>
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
