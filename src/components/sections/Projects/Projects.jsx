import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Projects.css";

const PROJECT_KEYS = [
  { key: "utc", swatch: "swatch-1" },
  { key: "cairoGate", swatch: "swatch-2" },
  { key: "mivida", swatch: "swatch-3" },
  { key: "aterm", swatch: "swatch-4" },
];

const Projects = () => {
  const { t } = useTranslation();

  const projects = PROJECT_KEYS.map(({ key, swatch }, i) => ({
    num: String(i + 1).padStart(2, "0"),
    name: t(`projects.list.${key}.name`),
    category: t(`projects.list.${key}.category`),
    desc: t(`projects.list.${key}.desc`),
    tags: t(`projects.list.${key}.tags`, { returnObjects: true }),
    swatch,
  }));

  return (
    <div className="projects-page" id="projects">
      <motion.section
        className="p-hero"
        variants={heroContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <motion.div className="p-eyebrow" variants={fadeUp}>
          {t("projects.eyebrow")}
        </motion.div>

        <motion.h1 className="p-h1 serif" variants={fadeUp}>
          {t("projects.title")}
        </motion.h1>

        <motion.p className="p-sub" variants={fadeUp}>
          {t("projects.sub")}
        </motion.p>
      </motion.section>

      <motion.section
        className="p-grid"
        variants={gridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        {projects.map((p) => (
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
                {p.tags.map((tag) => (
                  <span className="p-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.section>

      <motion.section
        className="p-outro"
        variants={heroContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <motion.div className="p-outro-eyebrow" variants={fadeUp}>
          {t("projects.outroEyebrow")}
        </motion.div>

        <motion.h2 className="p-outro-h2 serif" variants={fadeUp}>
          {t("projects.outroTitle1")}
          <br />
          {t("projects.outroTitle2")}
        </motion.h2>

        <motion.a
          href="#contact"
          className="p-cta"
          variants={fadeUp}
          whileHover={{ x: 6 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {t("projects.cta")}
        </motion.a>
      </motion.section>
    </div>
  );
};

export default Projects;