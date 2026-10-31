import { useState } from "react";
import logo from "../../logo.jpg";

export default function Header({ name, theme, onToggleTheme, language, onToggleLanguage, copy }) {
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
        aria-label={copy.menuLabel}
        aria-controls="navLinks"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        ☰
      </button>
      <nav className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks" aria-label={copy.navigationLabel}>
        {copy.navigation.map((label, index) => (
          <a href={["#home", "#about", "#programs", "#initiatives", "#gallery", "#impact", "#contact"][index]} onClick={closeMenu} key={label}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-tools">
        <button
          className="language-toggle"
          type="button"
          aria-label={language === "en" ? "वेबसाइट हिंदी में देखें" : "View website in English"}
          onClick={onToggleLanguage}
        >
          {copy.switchLanguage}
        </button>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`${copy.themeLabel} ${theme === "light" ? copy.darkMode : copy.lightMode}`}
          aria-pressed={theme === "dark"}
          onClick={onToggleTheme}
        >
          <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
        </button>
      </div>
      <a className="nav-cta" href="#donate" onClick={closeMenu}>
        <span aria-hidden="true">♥</span> <span>{copy.donateShort}</span>
      </a>
    </header>
  );
}
