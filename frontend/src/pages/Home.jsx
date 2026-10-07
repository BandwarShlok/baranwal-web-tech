import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import "../styles/home.css";

function Home() {
  return (
    <>
      <SEO
        title="Baranwal Web & Tech | Websites & Digital Solutions"
        description="Baranwal Web & Tech builds professional websites, e-commerce stores, custom business systems and digital solutions for growing businesses."
      />

      <div className="home">
        {/* HERO */}
        <section className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <p className="eyebrow">BARANWAL WEB & TECH</p>

              <h1>
                Websites and digital solutions for businesses that want to grow.
              </h1>

              <p className="hero-description">
                Professional websites, e-commerce and custom digital solutions
                designed around the way your business works.
              </p>

              <div className="hero-actions">
                <Link to="/work" className="primary-button">
                  View Our Work
                  <ArrowUpRight size={17} />
                </Link>

                <Link to="/contact" className="text-button">
                  Start a Project
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="hero-project">
              <div className="project-label">
                <span>01</span>
                <span>Selected Build</span>
              </div>

              <div className="project-image">
                <div className="image-placeholder">
                  <span>Clinic Management System</span>
                </div>
              </div>

              <div className="project-caption">
                <strong>Clinic Management System</strong>
                <span>Business System</span>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="industry-strip">
          <div className="section-container">
            <span className="industry-label">WE WORK WITH</span>

            <div className="industry-list">
              <span>Retail</span>
              <span>Healthcare</span>
              <span>Hospitality</span>
              <span>Professional Services</span>
              <span>Local Businesses</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services-section">
          <div className="section-container">
            <div className="section-intro">
              <span className="section-number">01</span>

              <div>
                <p className="section-kicker">WHAT WE DO</p>

                <h2>Digital work built around your business.</h2>
              </div>
            </div>

            <div className="services-list">
              <Link to="/services" className="service-row">
                <span className="service-number">01</span>

                <div className="service-name">
                  <h3>Business Websites</h3>
                  <p>
                    Professional websites that clearly explain your business and
                    help customers contact you.
                  </p>
                </div>

                <ArrowUpRight size={20} />
              </Link>

              <Link to="/services" className="service-row">
                <span className="service-number">02</span>

                <div className="service-name">
                  <h3>E-Commerce</h3>
                  <p>
                    Online stores built around your products, customers and
                    sales process.
                  </p>
                </div>

                <ArrowUpRight size={20} />
              </Link>

              <Link to="/services" className="service-row">
                <span className="service-number">03</span>

                <div className="service-name">
                  <h3>Custom Business Systems</h3>
                  <p>
                    Software designed around the way your business actually
                    operates.
                  </p>
                </div>

                <ArrowUpRight size={20} />
              </Link>

              <Link to="/services" className="service-row">
                <span className="service-number">04</span>

                <div className="service-name">
                  <h3>Automation</h3>
                  <p>
                    Reduce repetitive work with practical workflows and
                    integrations.
                  </p>
                </div>

                <ArrowUpRight size={20} />
              </Link>

              <Link to="/services" className="service-row">
                <span className="service-number">05</span>

                <div className="service-name">
                  <h3>AI Solutions</h3>
                  <p>
                    Practical AI tools for specific business problems and
                    workflows.
                  </p>
                </div>

                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="work-section">
          <div className="section-container">
            <div className="work-heading">
              <div>
                <p className="section-kicker">SELECTED WORK</p>

                <h2>Projects we have worked on.</h2>
              </div>

              <Link to="/work" className="outline-link">
                View all work
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="work-grid">
              <article className="work-item work-large">
                <div className="work-image">
                  <div className="image-placeholder">
                    <span>Clinic Management System</span>
                  </div>
                </div>

                <div className="work-info">
                  <div>
                    <h3>Clinic Management System</h3>
                    <p>Business System</p>
                  </div>

                  <span>01</span>
                </div>
              </article>

              <article className="work-item">
                <div className="work-image">
                  <div className="image-placeholder">
                    <span>Inventory Control System</span>
                  </div>
                </div>

                <div className="work-info">
                  <div>
                    <h3>Inventory Control System</h3>
                    <p>Custom System</p>
                  </div>

                  <span>02</span>
                </div>
              </article>

              <article className="work-item work-offset">
                <div className="work-image">
                  <div className="image-placeholder">
                    <span>Student Result Management System</span>
                  </div>
                </div>

                <div className="work-info">
                  <div>
                    <h3>Student Result Management System</h3>
                    <p>Management System</p>
                  </div>

                  <span>03</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process-section">
          <div className="section-container">
            <div className="process-layout">
              <div className="process-intro">
                <p className="section-kicker">HOW WE WORK</p>

                <h2>Simple process. Clear communication.</h2>

                <p>
                  Every project starts by understanding what the business needs
                  before we decide what should be built.
                </p>

                <Link to="/process" className="text-button">
                  See our process
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="process-steps">
                <div className="process-step">
                  <span>01</span>

                  <div>
                    <h3>Understand</h3>
                    <p>We learn about your business, customers and problem.</p>
                  </div>
                </div>

                <div className="process-step">
                  <span>02</span>

                  <div>
                    <h3>Plan</h3>
                    <p>We define the pages, features, technology and scope.</p>
                  </div>
                </div>

                <div className="process-step">
                  <span>03</span>

                  <div>
                    <h3>Build</h3>
                    <p>
                      We design and develop the solution with regular updates.
                    </p>
                  </div>
                </div>

                <div className="process-step">
                  <span>04</span>

                  <div>
                    <h3>Launch</h3>
                    <p>We test, deploy and hand over the finished project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="pricing-section">
          <div className="section-container">
            <div className="pricing-layout">
              <div>
                <p className="section-kicker">STARTING POINT</p>

                <h2>Clear starting prices.</h2>

                <p>
                  Final pricing depends on the project scope, features and
                  integrations.
                </p>
              </div>

              <div className="pricing-list">
                <div className="price-row">
                  <div>
                    <h3>Business Website</h3>
                    <span>Professional business website</span>
                  </div>

                  <strong>₹5,000+</strong>
                </div>

                <div className="price-row">
                  <div>
                    <h3>E-Commerce</h3>
                    <span>Online store and sales features</span>
                  </div>

                  <strong>₹20,000+</strong>
                </div>

                <div className="price-row">
                  <div>
                    <h3>Custom Solutions</h3>
                    <span>Business systems and custom software</span>
                  </div>

                  <strong>Let's discuss</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="final-cta">
          <div className="section-container">
            <div className="cta-content">
              <p className="section-kicker">HAVE A PROJECT?</p>

              <h2>Have a business problem we can solve?</h2>

              <p>
                Tell us what you're trying to improve. We'll help you figure out
                the right digital solution.
              </p>

              <Link to="/contact" className="primary-button">
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

export default Home;
