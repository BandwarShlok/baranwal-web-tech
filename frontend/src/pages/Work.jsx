import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import "../styles/work.css";

function Work() {
  return (
    <>
      <SEO
        title="Our Work | Baranwal Web & Tech"
        description="Explore websites, business systems and digital products designed and developed by Baranwal Web & Tech."
      />

      <div className="work-page">
        {/* HERO */}
        <section className="work-hero">
          <div className="work-container">
            <div className="work-hero-number">02</div>

            <div className="work-hero-content">
              <p className="work-kicker">OUR WORK</p>

              <h1>Projects built for real business needs.</h1>

              <p>
                A selection of websites, business systems and digital products
                we've designed and developed.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="work-projects">
          <div className="work-container">
            <div className="work-projects-intro">
              <div>
                <p className="work-kicker">SELECTED PROJECTS</p>

                <h2>Work that solves a purpose.</h2>
              </div>

              <p>
                These projects represent the type of work Baranwal Web & Tech
                can build for businesses, from public-facing websites to custom
                systems.
              </p>
            </div>

            {/* PROJECT 01 */}
            <article className="work-project work-project-featured">
              <div className="work-project-image">
                <div className="work-image-placeholder">
                  <span>Clinic Management System</span>
                </div>
              </div>

              <div className="work-project-info">
                <div className="work-project-meta">
                  <span>01</span>
                  <span>Business System</span>
                </div>

                <h3>Clinic Management System</h3>

                <p>
                  A business management system designed to organize clinic
                  operations, appointments and day-to-day information.
                </p>

                <div className="work-project-tags">
                  <span>Web Application</span>
                  <span>Management</span>
                  <span>Responsive</span>
                </div>
              </div>
            </article>

            {/* PROJECT 02 */}
            <article className="work-project work-project-reverse">
              <div className="work-project-info">
                <div className="work-project-meta">
                  <span>02</span>
                  <span>Custom System</span>
                </div>

                <h3>Inventory Control System</h3>

                <p>
                  A system for managing products, stock information and
                  inventory-related operations in one place.
                </p>

                <div className="work-project-tags">
                  <span>Web Application</span>
                  <span>Inventory</span>
                  <span>Database</span>
                </div>
              </div>

              <div className="work-project-image">
                <div className="work-image-placeholder">
                  <span>Inventory Control System</span>
                </div>
              </div>
            </article>

            {/* PROJECT 03 */}
            <article className="work-project">
              <div className="work-project-image">
                <div className="work-image-placeholder">
                  <span>Student Result Management System</span>
                </div>
              </div>

              <div className="work-project-info">
                <div className="work-project-meta">
                  <span>03</span>
                  <span>Management System</span>
                </div>

                <h3>Student Result Management System</h3>

                <p>
                  A web-based system for managing student information, results
                  and academic records through structured workflows.
                </p>

                <div className="work-project-tags">
                  <span>Web Application</span>
                  <span>Student Management</span>
                  <span>Database</span>
                </div>
              </div>
            </article>

            {/* PROJECT 04 */}
            <article className="work-project work-project-reverse">
              <div className="work-project-info">
                <div className="work-project-meta">
                  <span>04</span>
                  <span>Web Application</span>
                </div>

                <h3>GymFlow</h3>

                <p>
                  A fitness-focused web application for workout planning,
                  nutrition tracking and progress management.
                </p>

                <div className="work-project-tags">
                  <span>Web Application</span>
                  <span>Workout</span>
                  <span>Diet</span>
                </div>
              </div>

              <div className="work-project-image">
                <div className="work-image-placeholder">
                  <span>GymFlow</span>
                </div>
              </div>
            </article>

            {/* PROJECT 05 */}
            <article className="work-project">
              <div className="work-project-image">
                <div className="work-image-placeholder">
                  <span>TradeX</span>
                </div>
              </div>

              <div className="work-project-info">
                <div className="work-project-meta">
                  <span>05</span>
                  <span>Web Application</span>
                </div>

                <h3>TradeX</h3>

                <p>
                  A simulated online trading application with portfolio,
                  transaction and buy-and-sell workflows.
                </p>

                <div className="work-project-tags">
                  <span>Web Application</span>
                  <span>Trading Simulation</span>
                  <span>Dashboard</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="work-cta">
          <div className="work-container">
            <div className="work-cta-content">
              <p className="work-kicker">HAVE A PROJECT?</p>

              <h2>Have something you want to build?</h2>

              <p>
                Tell us about your business, project or workflow and we'll
                discuss the right solution.
              </p>

              <Link to="/contact" className="work-button">
                Start a Conversation
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Work;
