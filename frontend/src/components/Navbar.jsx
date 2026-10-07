import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";

import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand">
          <picture>
            <source media="(max-width: 900px)" srcSet="/logo-submark.webp" />

            <img
              src="/logo-secondary.webp"
              alt="Baranwal Web & Tech"
              className="brand-logo"
            />
          </picture>
        </Link>

        <nav className="nav-menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Our Work
          </NavLink>

          <NavLink
            to="/process"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Process
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </nav>

        <Link to="/contact" className="nav-talk">
          Let's Talk
          <ArrowUpRight size={17} />
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Open navigation menu"
        >
          <Menu size={23} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
