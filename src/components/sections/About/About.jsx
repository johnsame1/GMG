import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import stone from "../../Photos/stone.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.08, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// Re-triggering viewport config: replays every time the element
// scrolls into view, both scrolling down AND scrolling back up.
const viewportSettings = { once: false, amount: 0.3 };

const About = () => {
  return (
    <section className="about-section">
      <div className="about-overlay">
        <motion.div
          className="about-card"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.div className="about-content" variants={container}>
            <motion.span className="about-subtitle" variants={fadeUp}>
              CURATED LIVING, QUIETLY LUXURIOUS.
            </motion.span>

            <motion.h2 variants={fadeUp}>About GMG</motion.h2>

            <motion.p variants={fadeUp}>
              GMG is a design studio rooted in a love of timeless interiors and
              considered details. We create elegant spaces that balance beauty,
              functionality, and emotion.
            </motion.p>

            <motion.p variants={fadeUp}>
              With years of experience, we transform ideas into refined
              environments tailored to every client.
            </motion.p>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div className="about-image" variants={imageReveal}>
            <img src={stone} alt="Interior" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
