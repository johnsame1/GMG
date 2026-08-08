import React from "react";
import "./Projects.css";

const PROJECTS = [
  {
    num: "01",
    name: "UTC",
    category: "Flooring & Staircases",
    desc: "Full flooring and staircase installation — natural stone treads, risers, and floor slabs finished and set on-site by our own team.",
    tags: ["Marble", "Staircases", "Interior"],
    swatch: "swatch-1",
  },
  {
    num: "02",
    name: "Cairo Gate",
    category: "Landscape",
    desc: "Landscape stonework across outdoor walkways and shared areas, paired with the surrounding architecture and planting.",
    tags: ["Landscape", "Paving", "Outdoor"],
    swatch: "swatch-2",
  },
  {
    num: "03",
    name: "Mivida",
    category: "Flooring",
    desc: "Interior flooring supplied and installed to match the development's design specification, slab by slab.",
    tags: ["Marble", "Flooring", "Interior"],
    swatch: "swatch-3",
  },
  {
    num: "04",
    name: "Aterm",
    category: "Gates",
    desc: "Stone-clad entrance gates, cut and finished for a facade-grade result and installed directly on-site.",
    tags: ["Facade", "Gates", "Exterior"],
    swatch: "swatch-4",
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      {/* HERO */}
      <section className="p-hero">
        <div className="p-eyebrow">OUR PROJECTS</div>
        <h1 className="p-h1 serif">Work we've delivered</h1>
        <p className="p-sub">
          A selection of completed projects — from flooring and staircases to
          landscape work and entrance gates.
        </p>
      </section>

      {/* GRID */}
      <section className="p-grid">
        {PROJECTS.map((p) => (
          <article className="p-card" key={p.num}>
            <div className={`p-swatch ${p.swatch}`}>
              <span className="p-swatch-num mono">{p.num}</span>
            </div>

            <div className="p-card-body">
              <span className="p-category mono">{p.category}</span>
              <h2 className="p-name serif">{p.name}</h2>
              <p className="p-desc">{p.desc}</p>

              <div className="p-tags">
                {p.tags.map((t) => (
                  <span className="p-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* OUTRO */}
      <section className="p-outro">
        <div className="p-outro-eyebrow">GOT A PROJECT IN MIND</div>
        <h2 className="p-outro-h2 serif">
          Let's talk about
          <br />
          what you're building
        </h2>
        <a href="#contact" className="p-cta">
          Get in touch
        </a>
      </section>
    </div>
  );
};

export default Projects;
