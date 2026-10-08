import SEO from "../components/SEO";
import "../styles/home.css";

function Home() {
  return (
    <>
      <SEO
        title="Baranwal Web & Tech | Websites & Digital Solutions"
        description="Professional websites, e-commerce and custom digital solutions for growing businesses."
      />

      <div className="home-page">
        {/* =========================
            HERO SECTION
        ========================== */}
        <section className="home-hero">
          <div className="hero-content">
            <p className="hero-label">BARANWAL WEB & TECH</p>

            <h1>
              Websites and digital solutions for businesses that want to grow.
            </h1>

            <p className="hero-description">
              Professional websites, e-commerce and custom digital solutions
              designed around the way your business works.
            </p>

            <div className="hero-actions">
              <a href="/work" className="btn btn-primary">
                View Our Work
              </a>

              <a href="/contact" className="btn btn-secondary">
                Start a Project
              </a>
            </div>
          </div>

          {/* HERO PROJECT */}
          <div className="hero-visual">
            <div className="hero-project-preview">
              <div className="preview-top">
                <span>SELECTED PROJECT</span>

                <span>01</span>
              </div>

              <div className="preview-content">
                <p>Business Website</p>

                <h2>Ajay Gym</h2>

                <a
                  href="https://bandwarshlok.github.io/Ajay-Gym/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-project-link"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            INDUSTRIES
        ========================== */}
        <section className="industry-section">
          <p className="section-label">INDUSTRIES</p>

          <div className="industry-list">
            <span>Retail</span>

            <span>Healthcare</span>

            <span>Hospitality</span>

            <span>Professional Services</span>

            <span>Local Businesses</span>
          </div>
        </section>

        {/* =========================
            SERVICES
        ========================== */}
        <section className="services-preview">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <p className="section-label">WHAT WE DO</p>

              <h2>Digital solutions built around your business.</h2>
            </div>
          </div>

          <div className="services-list">
            {/* SERVICE 01 */}
            <article className="service-item">
              <span className="service-number">01</span>

              <div className="service-info">
                <h3>Business Websites</h3>

                <p>
                  Professional websites that help your business establish a
                  strong online presence.
                </p>
              </div>
            </article>

            {/* SERVICE 02 */}
            <article className="service-item">
              <span className="service-number">02</span>

              <div className="service-info">
                <h3>E-Commerce</h3>

                <p>
                  Online stores built around your products, customers and
                  business requirements.
                </p>
              </div>
            </article>

            {/* SERVICE 03 */}
            <article className="service-item">
              <span className="service-number">03</span>

              <div className="service-info">
                <h3>Custom Business Systems</h3>

                <p>
                  Software designed around the way your business actually works.
                </p>
              </div>
            </article>

            {/* SERVICE 04 */}
            <article className="service-item">
              <span className="service-number">04</span>

              <div className="service-info">
                <h3>Automation</h3>

                <p>
                  Reduce repetitive work with practical business automation and
                  workflows.
                </p>
              </div>
            </article>

            {/* SERVICE 05 */}
            <article className="service-item">
              <span className="service-number">05</span>

              <div className="service-info">
                <h3>AI Solutions</h3>

                <p>
                  Practical AI solutions built for specific business needs and
                  workflows.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* =========================
            SELECTED WORK
        ========================== */}
        <section className="selected-work">
          <div className="section-heading">
            <span className="section-number">02</span>

            <div>
              <p className="section-label">SELECTED WORK</p>

              <h2>Projects we've built.</h2>
            </div>
          </div>

          <div className="work-list">
            {/* PROJECT 01 - AJAY GYM */}
            <article className="work-item">
              <div className="work-content">
                <span className="work-number">01</span>

                <div className="work-details">
                  <p className="work-category">Business Website</p>

                  <h3>Ajay Gym</h3>

                  <p className="work-description">
                    A complete website for a fitness business with information
                    about services, facilities, pricing, gallery and contact.
                  </p>

                  <a
                    href="https://bandwarshlok.github.io/Ajay-Gym/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link"
                  >
                    View Live Project
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </article>

            {/* PROJECT 02 - TASKFLOW */}
            <article className="work-item">
              <div className="work-content">
                <span className="work-number">02</span>

                <div className="work-details">
                  <p className="work-category">Task Management Application</p>

                  <h3>TaskFlow</h3>

                  <p className="work-description">
                    A task management application with user authentication and
                    personal task management.
                  </p>

                  <a
                    href="https://bandwarshlok.github.io/Task-Flow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link"
                  >
                    View Live Project
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </article>

            {/* PROJECT 03 - INVENTORY */}
            <article className="work-item">
              <div className="work-content">
                <span className="work-number">03</span>

                <div className="work-details">
                  <p className="work-category">Custom Business System</p>

                  <h3>Inventory Control System</h3>

                  <p className="work-description">
                    A digital system for managing products, categories,
                    suppliers and inventory operations.
                  </p>

                  <a
                    href="https://bandwarshlok.github.io/Inventory-Control-System/frontend/dashboard.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link"
                  >
                    View Live Project
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* WORK CTA */}
          <div className="work-cta">
            <p>Want to see what we can build for your business?</p>

            <a href="/work" className="work-cta-link">
              View All Work
              <span>→</span>
            </a>
          </div>
        </section>

        {/* =========================
            PROCESS
        ========================== */}
        <section className="process-preview">
          <div className="section-heading">
            <span className="section-number">03</span>

            <div>
              <p className="section-label">OUR PROCESS</p>

              <h2>From idea to launch.</h2>
            </div>
          </div>

          <div className="process-list">
            {/* STEP 01 */}
            <article className="process-item">
              <span>01</span>

              <div>
                <h3>Understand</h3>

                <p>
                  We understand your business, goals and the problem you want to
                  solve.
                </p>
              </div>
            </article>

            {/* STEP 02 */}
            <article className="process-item">
              <span>02</span>

              <div>
                <h3>Plan</h3>

                <p>
                  We define the structure, features and technology required for
                  the project.
                </p>
              </div>
            </article>

            {/* STEP 03 */}
            <article className="process-item">
              <span>03</span>

              <div>
                <h3>Build</h3>

                <p>
                  We design and develop the solution with regular progress and
                  testing.
                </p>
              </div>
            </article>

            {/* STEP 04 */}
            <article className="process-item">
              <span>04</span>

              <div>
                <h3>Launch</h3>

                <p>
                  After testing, we deploy the project and help you get started.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* =========================
            PRICING
        ========================== */}
        <section className="pricing-preview">
          <div className="section-heading">
            <span className="section-number">04</span>

            <div>
              <p className="section-label">STARTING PRICES</p>

              <h2>Solutions for different stages of growth.</h2>
            </div>
          </div>

          <div className="pricing-list">
            {/* BUSINESS WEBSITE */}
            <article className="pricing-item">
              <div>
                <p>Business Website</p>

                <h3>₹5,000+</h3>
              </div>

              <span>Professional business presence</span>
            </article>

            {/* E-COMMERCE */}
            <article className="pricing-item">
              <div>
                <p>E-Commerce</p>

                <h3>₹20,000+</h3>
              </div>

              <span>Online store and product management</span>
            </article>

            {/* CUSTOM */}
            <article className="pricing-item">
              <div>
                <p>Custom Solutions</p>

                <h3>Let's discuss</h3>
              </div>

              <span>Systems designed around your workflow</span>
            </article>
          </div>
        </section>

        {/* =========================
            FINAL CTA
        ========================== */}
        <section className="home-final-cta">
          <div className="cta-content">
            <p className="section-label">START A PROJECT</p>

            <h2>Have a business problem we can solve?</h2>

            <p>
              Tell us what you're trying to improve. We'll help you figure out
              the right digital solution.
            </p>

            <a href="/contact" className="btn btn-primary">
              Start a Conversation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
