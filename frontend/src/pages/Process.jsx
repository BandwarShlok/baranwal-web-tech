import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import "../styles/process.css";

function Process() {
  return (
    <>
      <SEO
        title="Our Process | Baranwal Web & Tech"
        description="Learn how Baranwal Web & Tech understands, plans, builds, tests and launches practical digital solutions for businesses."
      />

      <div className="process-page">
        <section className="process-hero">
          <div className="process-container">
            <div className="process-hero-number">03</div>

            <div className="process-hero-content">
              <p className="process-kicker">OUR PROCESS</p>

              <h1>A clear process from idea to launch.</h1>

              <p>
                We keep the process simple. First we understand the business,
                then we plan, build, test and launch the right solution.
              </p>
            </div>
          </div>
        </section>

        <section className="process-overview">
          <div className="process-container">
            <div className="process-overview-heading">
              <p className="process-kicker">HOW WE WORK</p>

              <h2>Four steps. One clear direction.</h2>
            </div>

            <div className="process-timeline">
              <article className="process-item">
                <div className="process-item-marker">
                  <span>01</span>
                </div>

                <div className="process-item-content">
                  <p className="process-item-label">DISCOVERY</p>

                  <h3>Understand</h3>

                  <p>
                    Before writing code, we understand your business, customers,
                    current workflow and the problem you want to solve.
                  </p>

                  <div className="process-detail">
                    <span>We discuss</span>

                    <p>
                      Your business, goals, customers, existing tools and
                      requirements.
                    </p>
                  </div>
                </div>
              </article>

              <article className="process-item">
                <div className="process-item-marker">
                  <span>02</span>
                </div>

                <div className="process-item-content">
                  <p className="process-item-label">PLANNING</p>

                  <h3>Plan</h3>

                  <p>
                    We turn the requirements into a practical project plan. This
                    defines the pages, features, technology and scope.
                  </p>

                  <div className="process-detail">
                    <span>We define</span>

                    <p>
                      Structure, features, user flow, technical requirements and
                      timeline.
                    </p>
                  </div>
                </div>
              </article>

              <article className="process-item">
                <div className="process-item-marker">
                  <span>03</span>
                </div>

                <div className="process-item-content">
                  <p className="process-item-label">DEVELOPMENT</p>

                  <h3>Build</h3>

                  <p>
                    We design and develop the solution while keeping the agreed
                    requirements and business goals in focus.
                  </p>

                  <div className="process-detail">
                    <span>You receive</span>

                    <p>
                      Regular progress updates and working versions during
                      development.
                    </p>
                  </div>
                </div>
              </article>

              <article className="process-item">
                <div className="process-item-marker">
                  <span>04</span>
                </div>

                <div className="process-item-content">
                  <p className="process-item-label">TEST & LAUNCH</p>

                  <h3>Test & Launch</h3>

                  <p>
                    We test the finished project, fix issues, prepare deployment
                    and make the solution available to your customers.
                  </p>

                  <div className="process-detail">
                    <span>We handle</span>

                    <p>
                      Testing, deployment, final checks and initial post-launch
                      support.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="process-client">
          <div className="process-container">
            <div className="process-client-grid">
              <div>
                <p className="process-kicker">YOUR PART</p>

                <h2>Good projects need good communication.</h2>
              </div>

              <div className="process-client-content">
                <p>
                  We handle the design, development and technical work. You
                  provide the business information and feedback needed to build
                  the right solution.
                </p>

                <div className="process-client-list">
                  <div>
                    <span>01</span>
                    <p>Business information and requirements</p>
                  </div>

                  <div>
                    <span>02</span>
                    <p>Logo, images and content where required</p>
                  </div>

                  <div>
                    <span>03</span>
                    <p>Timely feedback and approvals</p>
                  </div>

                  <div>
                    <span>04</span>
                    <p>Domain, hosting or third-party access when applicable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process-timeline-section">
          <div className="process-container">
            <div className="process-timeline-heading">
              <div>
                <p className="process-kicker">TYPICAL TIMELINE</p>

                <h2>How long does a project take?</h2>
              </div>

              <p>
                The timeline depends on the project scope, content availability
                and feedback. These are typical starting ranges.
              </p>
            </div>

            <div className="timeline-list">
              <div className="timeline-row">
                <span>Landing Page</span>
                <strong>5–7 days</strong>
              </div>

              <div className="timeline-row">
                <span>Business Website</span>
                <strong>7–14 days</strong>
              </div>

              <div className="timeline-row">
                <span>Professional Website</span>
                <strong>14–21 days</strong>
              </div>

              <div className="timeline-row">
                <span>E-Commerce</span>
                <strong>21–35 days</strong>
              </div>

              <div className="timeline-row">
                <span>Custom Business System</span>
                <strong>30–60+ days</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="process-cta">
          <div className="process-container">
            <div className="process-cta-content">
              <p className="process-kicker">READY TO START?</p>

              <h2>Tell us what you want to build.</h2>

              <p>
                We can start with a simple conversation about your business and
                what you need.
              </p>

              <Link to="/contact" className="process-button">
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

export default Process;
