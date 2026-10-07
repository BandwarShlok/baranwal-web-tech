import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <img
            src="/logo-secondary.webp"
            alt="Baranwal Web & Tech"
            className="footer-logo"
          />

          <p className="footer-tagline">
            Websites • Digital Solutions • Automation
          </p>

          <p className="footer-description">
            Professional websites and practical digital solutions
            for growing businesses.
          </p>
        </div>

        <div className="footer-column">
          <h3>Company</h3>

          <Link to="/about">About</Link>
          <Link to="/work">Our Work</Link>
          <Link to="/process">Process</Link>
        </div>

        <div className="footer-column">
          <h3>Services</h3>

          <Link to="/services">Business Websites</Link>
          <Link to="/services">E-Commerce</Link>
          <Link to="/services">Custom Solutions</Link>
          <Link to="/services">Automation</Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <a href="mailto:bandwarshlok@gmail.com">
            bandwarshlok@gmail.com
          </a>

          <a href="tel:9321324984">
            +91 9321324984
          </a>

          <span>
            Mumbai
          </span>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © 2026 Baranwal Web & Tech
        </span>

        <Link to="/privacy">
          Privacy Policy
        </Link>
      </div>

    </footer>
  );
}

export default Footer;