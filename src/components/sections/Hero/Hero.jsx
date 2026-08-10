import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Hero.css";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const vein = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.8, ease: "easeInOut", delay: 0.1 * i },
      opacity: { duration: 0.4, delay: 0.1 * i },
    },
  }),
};

const viewportSettings = { once: false, amount: 0.3 };

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="gmg-hero">
      <motion.svg
        className="gmg-hero-veins"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <motion.path
          d="M -50 100 C 200 180, 350 60, 500 220 S 850 380, 1100 260 S 1400 340, 1500 180"
          stroke="#A9834F"
          strokeWidth="1.4"
          fill="none"
          opacity="0.55"
          custom={0}
          variants={vein}
        />
        <motion.path
          d="M -50 300 C 150 250, 300 420, 480 340 S 780 200, 950 380 S 1250 460, 1500 400"
          stroke="#A9834F"
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
          custom={1}
          variants={vein}
        />
        <motion.path
          d="M 200 -50 C 260 150, 180 300, 320 420 S 400 650, 300 800 S 350 900, 280 950"
          stroke="#A9834F"
          strokeWidth="1"
          fill="none"
          opacity="0.35"
          custom={2}
          variants={vein}
        />
        <motion.path
          d="M -50 700 C 200 620, 400 780, 650 700 S 1000 620, 1500 700"
          stroke="#A9834F"
          strokeWidth="0.6"
          fill="none"
          opacity="0.25"
          custom={3}
          variants={vein}
        />
      </motion.svg>

      <motion.div
        className="gmg-hero-content"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <motion.span className="gmg-eyebrow" variants={fadeUp}>
          {t("hero.eyebrow")}
        </motion.span>

        <motion.h1 className="gmg-hero-title" variants={fadeUp}>
          {t("hero.title1")}
          <br />
          {t("hero.title2")} <em>{t("hero.titleEm")}</em>
        </motion.h1>

        <motion.p className="gmg-hero-text" variants={fadeUp}>
          {t("hero.text")}
        </motion.p>

        <motion.a
          href="#collections"
          className="gmg-cta"
          variants={fadeUp}
          whileHover={{ x: 6 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {t("hero.cta")}
        </motion.a>
      </motion.div>

      <motion.div
        className="gmg-scroll-hint"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportSettings}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="gmg-scroll-line"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        {t("hero.scroll")}
      </motion.div>
    </section>
  );
};

export default Hero;
