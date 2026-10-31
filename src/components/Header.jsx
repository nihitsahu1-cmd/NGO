import { useState } from "react";
import logo from "../../logo.jpg";

export default function Header({ name, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label={`${name} home`} onClick={closeMenu}>
        <img className="brand-logo" src={logo} alt="" />
        <span>{name}</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-controls="navLinks"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        ☰
      </button>
      <nav className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks" aria-label="Main navigation">
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#programs" onClick={closeMenu}>Programs</a>
        <a href="#initiatives" onClick={closeMenu}>Our Work</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#impact" onClick={closeMenu}>Our Impact</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <button
        className="theme-toggle"
        type="button"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        aria-pressed={theme === "dark"}
        onClick={onToggleTheme}
      >
        <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
      </button>
      <a className="nav-cta" href="#donate" onClick={closeMenu}>
        <span aria-hidden="true">♥</span> <span>Donate</span>
      </a>
    </header>
  );
}
