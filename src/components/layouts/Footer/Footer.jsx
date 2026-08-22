import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";
import { FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const viewportSettings = { once: true, amount: 0.2 };

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
  const { t } = useTranslation();

  const collectionsLinks = t("footer.columns.collections", {
    returnObjects: true,
  });
  const servicesLinks = t("footer.columns.services", { returnObjects: true });
  const companyLinks = t("footer.columns.company", { returnObjects: true });
  const legalLinks = t("footer.legal", { returnObjects: true });

 const phone = "+201119541496";
const email = "gmg2021990@gmail.com";
const address = t("footer.contact.address");

  const socialLinks = [
    { key: "instagram", label: t("footer.social.instagram") },
    { key: "linkedin", label: t("footer.social.linkedin") },
    { key: "behance", label: t("footer.social.behance") },
    { key: "pinterest", label: t("footer.social.pinterest") },
  ];

  return (
    <footer className={styles.footer} id="contact">
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
                <div className={styles.logoSubtitle}>{t("footer.tagline")}</div>
              </div>
            </div>

            <p className={styles.description}>{t("footer.description")}</p>

            <ul className={styles.contactList}>
  <li className={styles.contactItem}>
    <span className={styles.contactDash} />
    {address}
  </li>

  <li className={styles.contactItem}>
    <span className={styles.contactDash} />
    <a
      href={`tel:${phone}`}
      className={styles.contactLink}
      dir="ltr"
    >
      <bdi>{phone}</bdi>
    </a>
  </li>

  <li className={styles.contactItem}>
    <span className={styles.contactDash} />
    <a
      href={`mailto:${email}`}
      className={styles.contactLink}
    >
      {email}
    </a>
  </li>
</ul>

<div className={styles.contactIcons}>
  <a
    href="https://facebook.com/gmg"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href={`https://wa.me/${phone.replace("+", "")}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <FaWhatsapp />
  </a>

  <a href={`mailto:${email}`} aria-label="Email">
    <FaEnvelope />
  </a>
</div>
          </motion.div>

          <motion.div
            className={styles.columns}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FooterColumn
              title={t("footer.columns.collectionsTitle")}
              links={collectionsLinks}
            />
            <FooterColumn
              title={t("footer.columns.servicesTitle")}
              links={servicesLinks}
            />
            <FooterColumn
              title={t("footer.columns.companyTitle")}
              links={companyLinks}
            />
          </motion.div>
        </div>

        <div className={styles.divider} />

        <motion.div
          className={styles.bottom}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className={styles.copyright} style={{textAlign : "center"}}>{t("footer.copyright")}</p>

       

         
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
