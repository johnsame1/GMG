import React from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// Re-triggering viewport config: replays every time the element
// scrolls into view, both scrolling down AND scrolling back up.
const viewportSettings = { once: false, amount: 0.2 };

const collectionsLinks = [
  "Calacatta",
  "Statuario",
  "Nero Marquina",
  "Emperador",
  "Onyx",
  "Travertine",
];
const servicesLinks = [
  "Consulting",
  "Custom Fabrication",
  "Installation",
  "Aftercare",
  "Sample Library",
  "Export",
];
const companyLinks = [
  "About GMG",
  "Our Quarries",
  "Sustainability",
  "Press",
  "Careers",
  "Contact",
];
const legalLinks = ["Privacy Policy", "Terms of Use", "Cookie Policy"];
const socialLinks = ["IG", "LI", "BE", "PI"];

const contactDetails = [
  "Via Cavour 14, 54033 Carrara, Italy",
  "+39 0585 776 000",
  "enquiries@gmg.com",
];

const FooterColumn = ({ title, links }) => (
  <div className={styles.column}>
    <h4 className={styles.columnTitle}>{title}</h4>
    <ul className={styles.linkList}>
      {links.map((link) => (
        <li key={link}>
          <a href="#" className={styles.link}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className={styles.top}>
          <motion.div
            className={styles.brand}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className={styles.logo}>
              <span className={styles.logoBar} />
              <div>
                <div className={styles.logoTitle}>GMG</div>
                <div className={styles.logoSubtitle}>Luxury Stone</div>
              </div>
            </div>

            <p className={styles.description}>
              Supplying the world&apos;s finest natural marble and stone to
              luxury architects, interior designers, and developers since 1986.
            </p>

            <ul className={styles.contactList}>
              {contactDetails.map((item) => (
                <li key={item} className={styles.contactItem}>
                  <span className={styles.contactDash} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={styles.columns}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FooterColumn title="Collections" links={collectionsLinks} />
            <FooterColumn title="Services" links={servicesLinks} />
            <FooterColumn title="Company" links={companyLinks} />
          </motion.div>
        </div>

        <div className={styles.divider} />

        <motion.div
          className={styles.bottom}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className={styles.copyright}>
            © 2024 GMG Luxury Stone. All rights reserved.
          </p>

          <ul className={styles.legalList}>
            {legalLinks.map((item) => (
              <li key={item}>
                <a href="#" className={styles.legalLink}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <ul className={styles.socialList}>
            {socialLinks.map((item) => (
              <li key={item}>
                <a href="#" className={styles.socialLink} aria-label={item}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
