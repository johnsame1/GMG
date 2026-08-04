import React from 'react'
import './About.css'
import stone from '../../Photos/stone.jpg'
const About = () => {
  return (
    <section className="about-section">
      <div className="about-overlay">

        <div className="about-card">

          <div className="about-content">
            <span className="about-subtitle">
              CURATED LIVING, QUIETLY LUXURIOUS.
            </span>

            <h2>About GMG</h2>

            <p>
              GMG is a design studio rooted in a love of timeless interiors
              and considered details. We create elegant spaces that balance
              beauty, functionality, and emotion.
            </p>

            <p>
              With years of experience, we transform ideas into refined
              environments tailored to every client.
            </p>

            <button>Get in Touch</button>
          </div>

          <div className="about-image">
            <img
              src={stone}
              alt="Interior"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default About