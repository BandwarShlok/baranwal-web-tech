import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import "../styles/not-found.css";

function NotFound() {
  return (
    <>
      <SEO
        title="404 | Page Not Found | Baranwal Web & Tech"
        description="The page you are looking for could not be found."
      />

      <main className="not-found-page">
        <div className="not-found-container">
          <div className="not-found-code">404</div>

          <div className="not-found-content">
            <p className="not-found-kicker">PAGE NOT FOUND</p>

            <h1>This page doesn't exist.</h1>

            <p>
              The page may have moved, the link may be incorrect, or the
              address you entered doesn't exist.
            </p>

            <div className="not-found-actions">
              <Link to="/" className="not-found-primary">
                <ArrowLeft size={17} />
                Back to Home
              </Link>

              <Link to="/contact" className="not-found-secondary">
                Contact Us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;