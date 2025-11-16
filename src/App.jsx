import React, { useEffect } from "react"
import { setupSectionReveal } from "./utils/sectionReveal"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Certification from './components/Certification/Certification'


export default function App() {

  useEffect(() => {
    setupSectionReveal()
  }, [])

  return (
    <>
      <Navbar />

      <main id="page-main" style={{ paddingTop: "var(--nav-height)" }}>

        <section id="home" className="reveal"><Hero /></section>
        <section id="about" className="reveal"><About /></section>
        <section id="skills" className="reveal"><Skills /></section>
        <section id="projects" className="reveal"><Projects /></section>
        <section id="resume" className="reveal"><Resume /></section>
        <section id="certification" className="reveal"><Certification /></section>
        <section id="contact" className="reveal"><Contact /></section>
      </main>
    </>
  )
}