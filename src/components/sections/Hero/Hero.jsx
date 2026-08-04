import React from 'react'
import'./Hero.css'
const Hero = () => {
   return (
    <section className="gmg-hero">
      <svg className="gmg-hero-veins" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M -50 100 C 200 180, 350 60, 500 220 S 850 380, 1100 260 S 1400 340, 1500 180" stroke="#A9834F" strokeWidth="1.4" fill="none" opacity="0.55"/>
        <path d="M -50 300 C 150 250, 300 420, 480 340 S 780 200, 950 380 S 1250 460, 1500 400" stroke="#A9834F" strokeWidth="0.8" fill="none" opacity="0.3"/>
        <path d="M 200 -50 C 260 150, 180 300, 320 420 S 400 650, 300 800 S 350 900, 280 950" stroke="#A9834F" strokeWidth="1" fill="none" opacity="0.35"/>
        <path d="M -50 700 C 200 620, 400 780, 650 700 S 1000 620, 1500 700" stroke="#A9834F" strokeWidth="0.6" fill="none" opacity="0.25"/>
      </svg>

      <div className="gmg-hero-content">
        <span className="gmg-eyebrow">Quarried in Egypt · Cut for the world</span>
        <h1 className="gmg-hero-title">
          Where stone<br />becomes <em>architecture</em>
        </h1>
        <p className="gmg-hero-text">
          GMG sources, cuts, and finishes natural marble and granite for architects and developers who won't compromise on material honesty.
        </p>
        <a href="#collections" className="gmg-cta">View the collections →</a>
      </div>

      <div className="gmg-scroll-hint">
        <div className="gmg-scroll-line"></div> Scroll
      </div>
    </section>
  );
}

export default Hero