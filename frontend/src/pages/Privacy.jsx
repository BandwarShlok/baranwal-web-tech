import SEO from "../components/SEO";
import "../styles/privacy.css";

function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Baranwal Web & Tech"
        description="Privacy Policy for Baranwal Web & Tech explaining how information shared with us is handled."
      />

      <main className="privacy-page">
        <section className="privacy-hero">
          <div className="privacy-container">
            <p className="privacy-eyebrow">LEGAL</p>

            <h1>Privacy Policy</h1>

            <p className="privacy-intro">
              We respect your privacy and aim to be clear about how information
              shared with Baranwal Web & Tech is handled.
            </p>

            <p className="privacy-updated">Last updated: October 2026</p>
          </div>
        </section>

        <section className="privacy-content">
          <div className="privacy-container">
            <article className="privacy-section">
              <h2>1. Information We Collect</h2>

              <p>
                When you contact us directly by email or phone, we may receive
                information such as your name, business name, email address,
                phone number, project requirements and other information you
                choose to provide.
              </p>

              <p>
                The project enquiry form on this website is currently a frontend
                interface and is not connected to a data-processing backend.
                Information entered into the form is not currently transmitted
                to or stored by our website.
              </p>
            </article>

            <article className="privacy-section">
              <h2>2. How We Use Your Information</h2>

              <p>
                Information you voluntarily provide to us may be used to
                understand your requirements, respond to enquiries, discuss
                projects, provide requested services and communicate with you
                about your enquiry.
              </p>

              <p>
                We aim to collect and use information only for purposes relevant
                to the interaction or service being provided.
              </p>
            </article>

            <article className="privacy-section">
              <h2>3. Contact and Project Enquiries</h2>

              <p>
                You can contact Baranwal Web & Tech using the email address or
                phone number provided on the website.
              </p>

              <p>
                When you voluntarily contact us, the information you provide may
                be used to respond to your request and discuss the services you
                are interested in.
              </p>

              <p>We do not sell your personal information to third parties.</p>
            </article>

            <article className="privacy-section">
              <h2>4. Cookies and Analytics</h2>

              <p>
                At the time of this policy, the website does not intentionally
                use advertising cookies or analytics services to build a
                personal profile of visitors.
              </p>

              <p>
                If analytics, cookies or other tracking technologies are added
                in the future, this Privacy Policy may be updated to explain
                their purpose and use.
              </p>
            </article>

            <article className="privacy-section">
              <h2>5. Third-Party Services</h2>

              <p>
                The website may contain links to third-party websites or
                services. We are not responsible for the privacy practices,
                content or security of external websites.
              </p>

              <p>
                If third-party services are introduced for forms, payments,
                hosting, analytics, communication or other business functions,
                their respective privacy policies may also apply.
              </p>
            </article>

            <article className="privacy-section">
              <h2>6. Data Security</h2>

              <p>
                We take reasonable measures to protect information voluntarily
                shared with us. However, no method of internet transmission or
                electronic storage can be guaranteed to be completely secure.
              </p>
            </article>

            <article className="privacy-section">
              <h2>7. Data Retention</h2>

              <p>
                Information received through direct communication may be
                retained only for as long as reasonably necessary to respond to
                the enquiry, provide services, maintain appropriate business
                records or meet applicable legal requirements.
              </p>
            </article>

            <article className="privacy-section">
              <h2>8. Your Rights</h2>

              <p>
                Depending on applicable law and the nature of the information
                involved, you may have rights relating to your personal data,
                including requesting access, correction or deletion of
                information you have provided.
              </p>

              <p>
                To make a privacy-related request, contact Baranwal Web & Tech
                using the details provided below.
              </p>
            </article>

            <article className="privacy-section">
              <h2>9. Changes to This Policy</h2>

              <p>
                We may update this Privacy Policy when our website, services or
                data practices change. The updated version will be published on
                this page with a revised date.
              </p>
            </article>

            <article className="privacy-section privacy-contact">
              <h2>10. Contact Us</h2>

              <p>
                If you have questions about this Privacy Policy or how
                information is handled, contact us using the details below.
              </p>

              <div className="privacy-contact-details">
                <p>
                  <strong>Baranwal Web & Tech</strong>
                </p>

                <p>
                  Email:{" "}
                  <a href="mailto:bandwarshlok@gmail.com">
                    bandwarshlok@gmail.com
                  </a>
                </p>

                <p>
                  Phone: <a href="tel:9321324984">+91 9321324984</a>
                </p>

                <p>Mumbai, Maharashtra, India</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Privacy;
