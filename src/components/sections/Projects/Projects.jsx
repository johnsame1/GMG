import React from "react";
import { motion } from "framer-motion";
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

// Re-triggering viewport config: replays every time the element
// scrolls into view, both scrolling down AND scrolling back up.
const viewportSettings = { once: false, amount: 0.3 };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const Projects = () => {
  return (
    <div className="projects-page">
      {/* HERO */}
      <motion.section
        className="p-hero"
        variants={heroContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <motion.div className="p-eyebrow" variants={fadeUp}>
          OUR PROJECTS
        </motion.div>
        <motion.h1 className="p-h1 serif" variants={fadeUp}>
          Work we've delivered
        </motion.h1>
        <motion.p className="p-sub" variants={fadeUp}>
          A selection of completed projects — from flooring and staircases to
          landscape work and entrance gates.
        </motion.p>
      </motion.section>

      {/* GRID */}
      <motion.section
        className="p-grid"
        variants={gridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        {PROJECTS.map((p) => (
          <motion.article
            className="p-card"
            key={p.num}
            variants={cardVariant}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
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
          </motion.article>
        ))}
      </motion.section>

      {/* OUTRO */}
      <motion.section
        className="p-outro"
        variants={heroContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <motion.div className="p-outro-eyebrow" variants={fadeUp}>
          GOT A PROJECT IN MIND
        </motion.div>
        <motion.h2 className="p-outro-h2 serif" variants={fadeUp}>
          Let's talk about
          <br />
          what you're building
        </motion.h2>
        <motion.a
          href="#contact"
          className="p-cta"
          variants={fadeUp}
          whileHover={{ x: 6 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Get in touch
        </motion.a>
      </motion.section>
    </div>
  );
};

export default Projects;
