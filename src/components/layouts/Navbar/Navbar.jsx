import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef(null);

  // يقفل المنيو عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // تغيير شكل الـ Navbar أثناء الـ Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`gmg-nav ${scrolled ? "scrolled" : ""}`} ref={menuRef}>
      <div className="gmg-nav-logo">GMG</div>

      <div className="gmg-nav-actions">
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
              Collections
            </a>
          </li>

          <li>
            <a href="#process" onClick={() => setMenuOpen(false)}>
              Process
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
