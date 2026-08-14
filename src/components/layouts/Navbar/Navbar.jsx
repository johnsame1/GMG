import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import bg from "../../Photos/GMG_logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const menuRef = useRef(null);
  const isAr = i18n.language === "ar";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setLang = (lang) => {
    if (lang !== i18n.language) i18n.changeLanguage(lang);
  };

  return (
    <nav
      className={`gmg-nav ${scrolled ? "scrolled" : ""}`}
      ref={menuRef}
    >
      <div className="gmg-nav-logo">GMG</div>

      <div className="gmg-nav-actions">
        <div className={`lang-toggle ${isAr ? "is-ar" : "is-en"}`}>
          <span className="lang-toggle-thumb" aria-hidden="true" />
          <button
            type="button"
            className="lang-toggle-option"
            onClick={() => setLang("en")}
            aria-pressed={!isAr}
          >
            EN
          </button>
          <button
            type="button"
            className="lang-toggle-option"
            onClick={() => setLang("ar")}
            aria-pressed={isAr}
          >
            AR
          </button>
        </div>

        <button
          type="button"
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`gmg-nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#collections" onClick={() => setMenuOpen(false)}>
              {t("nav.collections")}
            </a>
          </li>
          <li>
            <a href="#process" onClick={() => setMenuOpen(false)}>
              {t("nav.process")}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              {t("nav.projects")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              {t("nav.contact")}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
