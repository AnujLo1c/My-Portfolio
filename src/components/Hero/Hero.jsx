// src/components/Hero/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'


export default function Hero() {
  return (
    <div className="container" style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "center", overflow:"visible" }}>
      
     

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)" }}>Hi — I'm Anuj</h1>
        <p style={{ marginTop: 12, color: "var(--muted)" }}>
          Frontend developer building bold, interactive experiences.
        </p>
      </motion.div>
    </div>
  );
}
