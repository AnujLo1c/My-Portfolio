import React, { useState, useRef, useEffect } from "react"
import useTheme from "../../hooks/useTheme"
import "./ThemeDropdown.css"

export default function ThemeDropdown() {
  const { theme, setTheme, THEMES } = useTheme()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="theme-dropdown" ref={dropdownRef}>
      <button
  className="theme-btn"
  onClick={() => setOpen(prev => !prev)}
  aria-label="Choose theme"
  aria-haspopup="true"
  aria-expanded={open}
>
  <svg viewBox="0 0 48 48" width="30" height="30" aria-hidden="true" focusable="false" className="theme-icon">
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
</button>


      {open && (
        <div className="dropdown-panel">
          {THEMES.map(t => (
            <button
              key={t}
              className={`dropdown-item ${theme === t ? "active" : ""}`}
              onClick={() => {
                setTheme(t)
                setOpen(false)
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
