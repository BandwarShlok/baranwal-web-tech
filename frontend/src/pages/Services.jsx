import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import "../styles/services.css";

function Services() {
  return (
    <>
      <SEO
        title="Services | Baranwal Web & Tech"
        description="Explore website development, e-commerce, custom business systems, automation and AI solutions from Baranwal Web & Tech."
      />

      <div className="services-page">

        {/* HERO */}

        <section className="services-hero">
          <div className="services-container">

            <div className="services-hero-number">
              01
            </div>

            <div className="services-hero-content">

              <p className="services-kicker">
                SERVICES
              </p>

              <h1>
                Digital solutions built
                around your business.
              </h1>

              <p>
                From a professional business website to a
                custom system, we build what your business
                actually needs.
              </p>

            </div>

          </div>
        </section>


        {/* SERVICES LIST */}

        <section className="services-main">
          <div className="services-container">

            <div className="services-intro">

              <p className="services-kicker">
                WHAT WE BUILD
              </p>

              <p>
                Every project is different. We start with
                the business problem, then choose the
                right technology and scope.
              </p>

            </div>


            <div className="services-items">

              {/* 01 */}

              <article className="service-detail">

                <div className="service-detail-number">
                  01
                </div>

                <div className="service-detail-content">

                  <h2>
                    Business Websites
                  </h2>

                  <p className="service-detail-lead">
                    A professional website that clearly
                    presents your business and gives
                    customers an easy way to contact you.
                  </p>

                  <div className="service-detail-columns">

                    <div>
                      <h3>Good for</h3>

                      <p>
                        Local businesses, professionals,
                        shops, clinics, salons, restaurants
                        and service businesses.
                      </p>
                    </div>

                    <div>
                      <h3>Includes</h3>

                      <p>
                        Responsive design, business pages,
                        contact forms, WhatsApp integration,
                        maps, social links and deployment.
                      </p>
                    </div>

                  </div>

                </div>

                <div className="service-detail-price">
                  <span>Starting from</span>
                  <strong>₹5,000</strong>
                </div>

              </article>


              {/* 02 */}

              <article className="service-detail">

                <div className="service-detail-number">
                  02
                </div>

                <div className="service-detail-content">

                  <h2>
                    E-Commerce
                  </h2>

                  <p className="service-detail-lead">
                    An online store designed around your
                    products, customers and sales process.
                  </p>

                  <div className="service-detail-columns">

                    <div>
                      <h3>Good for</h3>

                      <p>
                        Clothing stores, boutiques, product
                        businesses and retailers moving
                        their sales online.
                      </p>
                    </div>

                    <div>
                      <h3>Includes</h3>

                      <p>
                        Products, categories, cart, checkout,
                        orders, customer accounts and
                        administrative management.
                      </p>
                    </div>

                  </div>

                </div>

                <div className="service-detail-price">
                  <span>Starting from</span>
                  <strong>₹20,000</strong>
                </div>

              </article>


              {/* 03 */}

              <article className="service-detail">

                <div className="service-detail-number">
                  03
                </div>

                <div className="service-detail-content">

                  <h2>
                    Custom Business Systems
                  </h2>

                  <p className="service-detail-lead">
                    Software designed around the way your
                    business actually operates.
                  </p>

                  <div className="service-detail-columns">

                    <div>
                      <h3>Examples</h3>

                      <p>
                        Clinic appointment systems, salon
                        booking, inventory management,
                        dashboards and internal tools.
                      </p>
                    </div>

                    <div>
                      <h3>Approach</h3>

                      <p>
                        We map your workflow first, then
                        design the system around the people
                        who will use it.
                      </p>
                    </div>

                  </div>

                </div>

                <div className="service-detail-price">
                  <span>Starting from</span>
                  <strong>₹15,000+</strong>
                </div>

              </article>


              {/* 04 */}

              <article className="service-detail">

                <div className="service-detail-number">
                  04
                </div>

                <div className="service-detail-content">

                  <h2>
                    Automation
                  </h2>

                  <p className="service-detail-lead">
                    Reduce repetitive work by connecting
                    the tools and processes your business
                    already uses.
                  </p>

                  <div className="service-detail-columns">

                    <div>
                      <h3>Examples</h3>

                      <p>
                        Enquiry notifications, booking
                        confirmations, reminders, reports
                        and lead management.
                      </p>
                    </div>

                    <div>
                      <h3>Built around</h3>

                      <p>
                        Your existing workflow. We look for
                        repetitive steps that can be handled
                        automatically.
                      </p>
                    </div>

                  </div>

                </div>

                <div className="service-detail-price">
                  <span>Starting from</span>
                  <strong>₹10,000+</strong>
                </div>

              </article>


              {/* 05 */}

              <article className="service-detail">

                <div className="service-detail-number">
                  05
                </div>

                <div className="service-detail-content">

                  <h2>
                    AI Solutions
                  </h2>

                  <p className="service-detail-lead">
                    Practical AI tools for specific business
                    problems, customer support and internal
                    workflows.
                  </p>

                  <div className="service-detail-columns">

                    <div>
                      <h3>Examples</h3>

                      <p>
                        AI assistants, FAQ systems, lead
                        qualification, document processing
                        and internal knowledge tools.
                      </p>
                    </div>

                    <div>
                      <h3>Important</h3>

                      <p>
                        We use AI when it solves a real
                        problem. It is not added simply
                        because it is available.
                      </p>
                    </div>

                  </div>

                </div>

                <div className="service-detail-price">
                  <span>Pricing</span>
                  <strong>Let's discuss</strong>
                </div>

              </article>

            </div>

          </div>
        </section>


        {/* PROJECT APPROACH */}

        <section className="services-approach">

          <div className="services-container">

            <div className="approach-grid">

              <div>

                <p className="services-kicker">
                  NOT SURE WHAT YOU NEED?
                </p>

                <h2>
                  Start with the problem,
                  not the technology.
                </h2>

              </div>

              <div>

                <p>
                  You don't need to know whether your
                  business needs a website, software,
                  automation or AI.
                </p>

                <p>
                  Tell us what is taking too much time,
                  what customers struggle with, or what
                  you want to improve. We'll help define
                  the right solution.
                </p>

                <Link
                  to="/contact"
                  className="services-button"
                >
                  Discuss Your Project
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

export default Services;