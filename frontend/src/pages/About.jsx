import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import "../styles/about.css";

function About() {
  return (
    <>
      <SEO
        title="About | Baranwal Web & Tech"
        description="Learn about Baranwal Web & Tech and our approach to building professional websites, business systems and practical digital solutions."
      />

      <div className="about-page">
        <section className="about-hero">
          <div className="about-container">
            <div className="about-hero-number">04</div>

            <div className="about-hero-content">
              <p className="about-kicker">ABOUT BARANWAL WEB & TECH</p>

              <h1>We build digital tools around real businesses.</h1>

              <p>
                Baranwal Web & Tech helps businesses build professional
                websites, online stores and custom digital systems.
              </p>
            </div>
          </div>
        </section>

        <section className="about-intro">
          <div className="about-container">
            <div className="about-intro-grid">
              <div>
                <p className="about-kicker">WHO WE ARE</p>
              </div>

              <div className="about-intro-copy">
                <h2>Technology should solve a business problem.</h2>

                <p>
                  A website is useful when it helps a business explain what it
                  does, reach customers and generate enquiries.
                </p>

                <p>
                  A business system is useful when it removes unnecessary manual
                  work and gives people a better way to manage information.
                </p>

                <p>
                  That is how we approach our projects. We start with the
                  business requirement and then decide what should be built.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-approach">
          <div className="about-container">
            <div className="about-approach-heading">
              <p className="about-kicker">OUR APPROACH</p>

              <h2>Practical work over unnecessary complexity.</h2>
            </div>

            <div className="about-principles">
              <article className="about-principle">
                <span>01</span>

                <div>
                  <h3>Understand first</h3>

                  <p>
                    We don't start by choosing technology. We first understand
                    the business, customers and workflow.
                  </p>
                </div>
              </article>

              <article className="about-principle">
                <span>02</span>

                <div>
                  <h3>Keep it useful</h3>

                  <p>
                    Features should have a reason to exist. We avoid adding
                    complexity that doesn't help the business.
                  </p>
                </div>
              </article>

              <article className="about-principle">
                <span>03</span>

                <div>
                  <h3>Build for the user</h3>

                  <p>
                    The people using the website or system should be able to
                    understand it without unnecessary friction.
                  </p>
                </div>
              </article>

              <article className="about-principle">
                <span>04</span>

                <div>
                  <h3>Communicate clearly</h3>

                  <p>
                    Project scope, progress and requirements should be clear
                    throughout development.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about-capabilities">
          <div className="about-container">
            <div className="about-capabilities-grid">
              <div>
                <p className="about-kicker">WHAT WE WORK ON</p>

                <h2>From a business website to a custom system.</h2>
              </div>

              <div className="about-capability-list">
                <div>
                  <span>01</span>
                  <p>Business Websites</p>
                </div>

                <div>
                  <span>02</span>
                  <p>E-Commerce</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Custom Business Systems</p>
                </div>

                <div>
                  <span>04</span>
                  <p>Business Automation</p>
                </div>

                <div>
                  <span>05</span>
                  <p>Practical AI Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-team">
          <div className="about-container">
            <div className="about-team-grid">
              <div className="about-team-image">
                <div>
                  Independent digital agency focused on practical business
                  solutions.
                </div>
              </div>

              <div className="about-team-content">
                <p className="about-kicker">THE PEOPLE BEHIND THE WORK</p>

                <h2>A focused approach to every project.</h2>

                <p>
                  Baranwal Web & Tech is built around a simple idea: understand
                  the business first, then build the technology that actually
                  helps.
                </p>

                <p>
                  Each project is approached with attention to its requirements,
                  users, functionality and long-term usefulness.
                </p>

                <div className="about-team-facts">
                  <div>
                    <span>Agency</span>
                    <strong>Baranwal Web & Tech</strong>
                  </div>

                  <div>
                    <span>Based in</span>
                    <strong>Mumbai</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="about-container">
            <div className="about-cta-content">
              <p className="about-kicker">WORK WITH US</p>

              <h2>Have something you want to build?</h2>

              <p>
                Tell us about your business and what you need. We can figure out
                the next step together.
              </p>

              <Link to="/contact" className="about-button">
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

export default About;
