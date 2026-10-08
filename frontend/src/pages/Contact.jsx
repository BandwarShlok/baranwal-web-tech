import { useState } from "react";

import { ArrowUpRight, Mail, Phone, MapPin, Clock3 } from "lucide-react";

import SEO from "../components/SEO";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (formStatus.message) {
      setFormStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const business = formData.business.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const projectType = formData.projectType;
    const budget = formData.budget;
    const message = formData.message.trim();

    if (!name || !email || !projectType || !message) {
      setFormStatus({
        type: "error",
        message:
          "Please fill in your name, email, project type and project details.",
      });

      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });

      return;
    }

    setIsSubmitting(true);

    setFormStatus({
      type: "info",
      message: "Sending your enquiry...",
    });

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error("Backend API URL is not configured.");
      }

      const response = await fetch(`${apiUrl}/api/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          business,
          email,
          phone,
          projectType,
          budget,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit enquiry.");
      }

      setFormStatus({
        type: "success",
        message:
          "Your project enquiry has been submitted successfully. We'll get back to you soon.",
      });

      setFormData({
        name: "",
        business: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Enquiry submission error:", error);

      setFormStatus({
        type: "error",
        message:
          "We couldn't submit your enquiry. Please try again or contact us directly by email or phone.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact | Baranwal Web & Tech"
        description="Start a project with Baranwal Web & Tech. Tell us about your business, website or digital solution requirements."
      />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-container">
            <div className="contact-hero-content">
              <p className="contact-eyebrow">START A PROJECT</p>

              <h1>
                Have a business problem
                <br />
                we can solve?
              </h1>

              <p className="contact-hero-text">
                Tell us what you're trying to improve. We'll help you figure out
                the right digital solution for your business.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-container contact-grid">
            <div className="contact-details">
              <div className="contact-intro">
                <p className="section-label">LET'S TALK</p>

                <h2>
                  Tell us what
                  <br />
                  you need.
                </h2>

                <p>
                  Whether you need a business website, online store, custom
                  software or automation, send us the details and we'll take it
                  from there.
                </p>
              </div>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={19} />
                  </div>

                  <div>
                    <span>Email</span>

                    <a href="mailto:bandwarshlok@gmail.com">
                      bandwarshlok@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={19} />
                  </div>

                  <div>
                    <span>Phone</span>

                    <a href="tel:+919321324984">+91 9321324984</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <span>Location</span>

                    <p>Mumbai</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Clock3 size={19} />
                  </div>

                  <div>
                    <span>Working Hours</span>

                    <p>Monday - Saturday, 10 AM - 7 PM</p>
                  </div>
                </div>
              </div>

              <div className="contact-direct">
                <p>Prefer a quick conversation?</p>

                <a href="tel:+919321324984" className="contact-direct-link">
                  Call us directly
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <div className="contact-form-heading">
                <p className="section-label">PROJECT ENQUIRY</p>

                <h2>
                  Tell us about
                  <br />
                  your project.
                </h2>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">
                      Your Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="business">Business Name</label>

                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your business name"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">
                      Email <span>*</span>
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone">Phone</label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="projectType">
                      Project Type <span>*</span>
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select project type</option>
                      <option value="Business Website">Business Website</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Custom Business System">
                        Custom Business System
                      </option>
                      <option value="Automation">Automation</option>
                      <option value="AI Solution">AI Solution</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="budget">Approximate Budget</label>

                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget</option>
                      <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                      <option value="₹10,000 - ₹20,000">
                        ₹10,000 - ₹20,000
                      </option>
                      <option value="₹20,000 - ₹50,000">
                        ₹20,000 - ₹50,000
                      </option>
                      <option value="₹50,000+">₹50,000+</option>
                      <option value="Not sure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="form-field form-field-full">
                  <label htmlFor="message">
                    Project Details <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business, what you need and what you want to improve."
                    rows="7"
                  />
                </div>

                {formStatus.message && (
                  <div
                    className={`form-message ${
                      formStatus.type === "error"
                        ? "form-message-error"
                        : formStatus.type === "success"
                          ? "form-message-success"
                          : "form-message-info"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {formStatus.message}
                  </div>
                )}

                <div className="form-submit">
                  <button
                    type="submit"
                    className="contact-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Project Enquiry"}

                    {!isSubmitting && <ArrowUpRight size={17} />}
                  </button>

                  <p>You can also contact us directly by email or phone.</p>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-bottom">
          <div className="contact-container">
            <div className="contact-bottom-inner">
              <div>
                <p className="section-label">HAVE QUESTIONS?</p>

                <h2>
                  Not sure what
                  <br />
                  you need yet?
                </h2>
              </div>

              <div className="contact-bottom-text">
                <p>
                  That's okay. Tell us about your business and the problem
                  you're facing. We'll help you decide whether a website,
                  system, automation or another solution makes sense.
                </p>

                <a
                  href="mailto:bandwarshlok@gmail.com"
                  className="contact-email-link"
                >
                  Email us
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
