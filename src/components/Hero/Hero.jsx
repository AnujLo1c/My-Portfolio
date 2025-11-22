import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.css";
import OrbitHero from "../OrbitHero/OrbitHero";


export default function Hero() {
  const typingRef = useRef();

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: [
        "Software Engineer",
        "Java Full-Stack Developer",
        "Flutter Developer",
      ],
      typeSpeed: 40,
      backSpeed: 25,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="hero-clean">

      {/* Left side empty background */}
      <div className="hero-left-clean">

        <OrbitHero />
      </div>

      {/* Right side content */}
      <div className="hero-right">
        <p className="intro">
          I am <span className="name">Anuj Lowanshi</span>
        </p>

        <h1 className="headline">
          Crafting full-stack apps <br />
          that bring ideas to <span className="highlight">life</span>.
        </h1>

        <p className="subtext">
          <span ref={typingRef}></span>
        </p>

        <div className="social-row">
          <a href="https://github.com/AnujLo1c" target="_blank"><i className="ri-github-fill"></i></a>
          <a href="https://www.linkedin.com/in/anuj-lowanshi-a35b9b236/" target="_blank"><i className="ri-linkedin-box-fill"></i></a>
          <a 
  href="https://leetcode.com/u/Anuj15_8/" 
  target="_blank" 
  className="leetcode-icon"
>
  <img 
    src="/My-Portfolio/leetcode.png" 
    alt="LeetCode" 
    className="leetcode-img"
  />
</a>


        </div>
      </div>
    </div>
  );
}
