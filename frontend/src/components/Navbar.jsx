import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const mobileNavClass = ({ isActive }) =>
    isActive ? "mobile-nav-link active" : "mobile-nav-link";

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <picture>
            <source media="(max-width: 900px)" srcSet="/logo-submark.webp" />

            <img
              src="/logo-secondary.webp"
              alt="Baranwal Web & Tech"
              className="brand-logo"
            />
          </picture>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="nav-menu">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/services" className={navClass}>
            Services
          </NavLink>

          <NavLink to="/work" className={navClass}>
            Our Work
          </NavLink>

          <NavLink to="/process" className={navClass}>
            Process
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        {/* DESKTOP CTA */}
        <Link to="/contact" className="nav-talk">
          Let's Talk
          <ArrowUpRight size={17} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={23} strokeWidth={2} />
          ) : (
            <Menu size={23} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="mobile-nav">
          <NavLink to="/" end className={mobileNavClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={mobileNavClass}
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink to="/work" className={mobileNavClass} onClick={closeMenu}>
            Our Work
          </NavLink>

          <NavLink to="/process" className={mobileNavClass} onClick={closeMenu}>
            Process
          </NavLink>

          <NavLink to="/about" className={mobileNavClass} onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" className={mobileNavClass} onClick={closeMenu}>
            Contact
          </NavLink>

          <Link to="/contact" className="mobile-nav-cta" onClick={closeMenu}>
            Let's Talk
            <ArrowUpRight size={17} />
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
