import SEO from "../components/SEO";
import "../styles/privacy.css";

function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Baranwal Web & Tech"
        description="Privacy Policy for Baranwal Web & Tech explaining how information shared with us is collected, used and stored."
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
                When you submit an enquiry through the website, the information
                you provide through the enquiry form is transmitted to our
                backend server and stored in our database. This may include your
                name, business name, email address, phone number, project type,
                budget and project message.
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
                Information submitted through the website may also be used to
                manage and track project enquiries within our internal
                administration system.
              </p>

              <p>
                We aim to collect and use information only for purposes relevant
                to the interaction or service being provided.
              </p>
            </article>

            <article className="privacy-section">
              <h2>3. Contact and Project Enquiries</h2>

              <p>
                You can contact Baranwal Web & Tech using the email address,
                phone number or enquiry form provided on the website.
              </p>

              <p>
                When you voluntarily submit an enquiry, the information you
                provide is transmitted to our backend and stored in our database
                so that we can review, respond to and manage your enquiry.
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
                Our website infrastructure may use third-party services for
                hosting, database management, deployment, communication or other
                business functions. Their respective privacy policies may also
                apply where relevant.
              </p>
            </article>

            <article className="privacy-section">
              <h2>6. Data Security</h2>

              <p>
                We take reasonable technical and organizational measures to
                protect information voluntarily shared with us and stored in our
                systems. However, no method of internet transmission or
                electronic storage can be guaranteed to be completely secure.
              </p>
            </article>

            <article className="privacy-section">
              <h2>7. Data Retention</h2>

              <p>
                Enquiry information may be retained for as long as reasonably
                necessary to respond to the enquiry, discuss or provide
                services, maintain appropriate business records or meet
                applicable legal requirements.
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
