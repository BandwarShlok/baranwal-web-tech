import SEO from "../components/SEO";
import "../styles/work.css";

function Work() {
  return (
    <>
      <SEO
        title="Our Work | Baranwal Web & Tech"
        description="Explore selected websites, applications and business systems built by Baranwal Web & Tech."
      />

      <div className="work-page">
        {/* =========================
            PAGE HERO
        ========================== */}
        <section className="work-hero">
          <div className="work-hero-content">
            <p className="section-label">OUR WORK</p>

            <h1>Projects built to solve real business needs.</h1>

            <p>
              A selection of websites, applications and business systems we've
              built using practical technology and business-focused design.
            </p>
          </div>
        </section>

        {/* =========================
            PROJECTS
        ========================== */}
        <section className="work-projects">
          {/* =========================
              PROJECT 01 - AJAY GYM
          ========================== */}
          <article className="work-project">
            <div className="project-number">01</div>

            <div className="project-content">
              {/* PROJECT INFORMATION */}
              <div className="project-info">
                <p className="project-category">BUSINESS WEBSITE</p>

                <h2>Ajay Gym</h2>

                <p className="project-description">
                  A complete business website designed for a fitness and gym
                  business. The website provides visitors with information about
                  the gym, facilities, services and ways to get in touch.
                </p>

                <div className="project-details">
                  <div>
                    <span>Type</span>

                    <strong>Business Website</strong>
                  </div>

                  <div>
                    <span>Focus</span>

                    <strong>Business Presence</strong>
                  </div>
                </div>

                <a
                  href="https://bandwarshlok.github.io/Ajay-Gym/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Live Project
                  <span>↗</span>
                </a>
              </div>

              {/* PROJECT PREVIEW */}
              <div className="project-preview">
                <div className="preview-header">
                  <span>AJAY GYM</span>

                  <span>01</span>
                </div>

                <div className="preview-body">
                  <p>FITNESS & TRAINING</p>

                  <h3>
                    Build strength.
                    <br />
                    Build consistency.
                  </h3>

                  <a
                    href="https://bandwarshlok.github.io/Ajay-Gym/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="preview-button"
                  >
                    Explore ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* =========================
              PROJECT 02 - TASKFLOW
          ========================== */}
          <article className="work-project">
            <div className="project-number">02</div>

            <div className="project-content">
              {/* PROJECT INFORMATION */}
              <div className="project-info">
                <p className="project-category">TASK MANAGEMENT APPLICATION</p>

                <h2>TaskFlow</h2>

                <p className="project-description">
                  A task management application designed to help users organize
                  and manage their daily work. The application includes user
                  authentication and personal task management.
                </p>

                <div className="project-details">
                  <div>
                    <span>Type</span>

                    <strong>Web Application</strong>
                  </div>

                  <div>
                    <span>Focus</span>

                    <strong>Productivity</strong>
                  </div>
                </div>

                <a
                  href="https://bandwarshlok.github.io/Task-Flow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Live Project
                  <span>↗</span>
                </a>
              </div>

              {/* PROJECT PREVIEW */}
              <div className="project-preview">
                <div className="preview-header">
                  <span>TASKFLOW</span>

                  <span>02</span>
                </div>

                <div className="preview-body">
                  <p>TASK MANAGEMENT</p>

                  <h3>
                    Organize your work.
                    <br />
                    Stay on track.
                  </h3>

                  <a
                    href="https://bandwarshlok.github.io/Task-Flow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="preview-button"
                  >
                    Open TaskFlow ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* =========================
              PROJECT 03 - INVENTORY
          ========================== */}
          <article className="work-project">
            <div className="project-number">03</div>

            <div className="project-content">
              {/* PROJECT INFORMATION */}
              <div className="project-info">
                <p className="project-category">CUSTOM BUSINESS SYSTEM</p>

                <h2>Inventory Control System</h2>

                <p className="project-description">
                  A business management system designed to simplify inventory
                  operations. It provides functionality for managing products,
                  categories, suppliers and stock.
                </p>

                <div className="project-details">
                  <div>
                    <span>Type</span>

                    <strong>Business System</strong>
                  </div>

                  <div>
                    <span>Focus</span>

                    <strong>Inventory Management</strong>
                  </div>
                </div>

                <a
                  href="https://bandwarshlok.github.io/Inventory-Control-System/frontend/dashboard.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Live Project
                  <span>↗</span>
                </a>
              </div>

              {/* PROJECT PREVIEW */}
              <div className="project-preview">
                <div className="preview-header">
                  <span>INVENTORY SYSTEM</span>

                  <span>03</span>
                </div>

                <div className="preview-body">
                  <p>BUSINESS MANAGEMENT</p>

                  <h3>
                    Manage inventory.
                    <br />
                    Control operations.
                  </h3>

                  <a
                    href="https://bandwarshlok.github.io/Inventory-Control-System/frontend/dashboard.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="preview-button"
                  >
                    Open Dashboard ↗
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* =========================
            FINAL CTA
        ========================== */}
        <section className="work-final-cta">
          <div>
            <p className="section-label">HAVE A PROJECT IN MIND?</p>

            <h2>Let's build something useful for your business.</h2>

            <p>
              Tell us what you want to improve, automate or bring online. We'll
              help you decide what needs to be built.
            </p>

            <a href="/contact" className="work-cta-button">
              Start a Conversation
              <span>→</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Work;
