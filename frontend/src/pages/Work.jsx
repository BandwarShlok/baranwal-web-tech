import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import "../styles/work.css";

function Work() {
  return (
    <>
      <SEO
        title="Our Work | Baranwal Web & Tech"
        description="Explore websites, e-commerce projects and custom digital solutions designed and developed by Baranwal Web & Tech."
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
                  <span>[ADD FASHION STORE SCREENSHOT]</span>
                </div>
              </div>

              <div className="work-project-info">
                <div className="work-project-meta">
                  <span>01</span>
                  <span>Business Website</span>
                </div>

                <h3>Fashion Store</h3>

                <p>
                  A product-focused website for a clothing business, designed to
                  present collections, products and customer enquiry options
                  clearly.
                </p>

                <div className="work-project-tags">
                  <span>Website</span>
                  <span>Responsive</span>
                  <span>WhatsApp</span>
                </div>
              </div>
            </article>

            {/* PROJECT 02 */}

            <article className="work-project work-project-reverse">
              <div className="work-project-info">
                <div className="work-project-meta">
                  <span>02</span>
                  <span>Booking Website</span>
                </div>

                <h3>Salon</h3>

                <p>
                  A service-based website designed to help customers understand
                  available services and make appointment enquiries.
                </p>

                <div className="work-project-tags">
                  <span>Website</span>
                  <span>Booking</span>
                  <span>Contact</span>
                </div>
              </div>

              <div className="work-project-image">
                <div className="work-image-placeholder">
                  <span>[ADD SALON SCREENSHOT]</span>
                </div>
              </div>
            </article>

            {/* PROJECT 03 */}

            <article className="work-project">
              <div className="work-project-image">
                <div className="work-image-placeholder">
                  <span>[ADD CLINIC SCREENSHOT]</span>
                </div>
              </div>

              <div className="work-project-info">
                <div className="work-project-meta">
                  <span>03</span>
                  <span>Business System</span>
                </div>

                <h3>Clinic</h3>

                <p>
                  A clinic website and appointment workflow designed to make it
                  easier for patients to find information and request
                  appointments.
                </p>

                <div className="work-project-tags">
                  <span>Website</span>
                  <span>Appointments</span>
                  <span>Admin</span>
                </div>
              </div>
            </article>

            {/* PROJECT 04 */}

            <article className="work-project work-project-reverse">
              <div className="work-project-info">
                <div className="work-project-meta">
                  <span>04</span>
                  <span>Custom System</span>
                </div>

                <h3>Inventory Control</h3>

                <p>
                  A business management system focused on tracking products,
                  stock information and day-to-day inventory operations.
                </p>

                <div className="work-project-tags">
                  <span>Dashboard</span>
                  <span>Database</span>
                  <span>Management</span>
                </div>
              </div>

              <div className="work-project-image">
                <div className="work-image-placeholder">
                  <span>[ADD INVENTORY SCREENSHOT]</span>
                </div>
              </div>
            </article>

            {/* PROJECT 05 */}

            <article className="work-project">
              <div className="work-project-image">
                <div className="work-image-placeholder">
                  <span>[ADD STUDENT SYSTEM SCREENSHOT]</span>
                </div>
              </div>

              <div className="work-project-info">
                <div className="work-project-meta">
                  <span>05</span>
                  <span>Management System</span>
                </div>

                <h3>Student Result Management</h3>

                <p>
                  A digital system for managing student records, results and
                  administrative operations in one place.
                </p>

                <div className="work-project-tags">
                  <span>Management</span>
                  <span>Database</span>
                  <span>Dashboard</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* APPROACH */}

        <section className="work-approach">
          <div className="work-container">
            <div className="work-approach-grid">
              <div>
                <p className="work-kicker">HAVE AN IDEA?</p>

                <h2>Your project could be next.</h2>
              </div>

              <div>
                <p>
                  Tell us what you're building, what isn't working, or what you
                  want to improve. We'll help you decide what should be built.
                </p>

                <Link to="/contact" className="work-button">
                  Start a Project
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Work;
