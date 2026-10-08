import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import SEO from "../components/SEO";
import "../styles/admin-login.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.username.trim() || !formData.password) {
      setError("Please enter your username and password.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error("Backend API URL is not configured.");
      }

      const response = await fetch(`${apiUrl}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username.trim(),
          password: formData.password,
        }),
      });

      const responseText = await response.text();

      let data;

      try {
        data = responseText ? JSON.parse(responseText) : null;
      } catch {
        throw new Error("The server returned an invalid response.");
      }

      if (!response.ok) {
        throw new Error(
          data?.message || `Login failed. Server returned ${response.status}.`,
        );
      }

      if (!data?.token) {
        throw new Error(
          "Login succeeded but no authentication token was returned.",
        );
      }

      localStorage.setItem("adminToken", data.token);

      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Admin login error:", error);

      setError(error.message || "Unable to login. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Admin Login | Baranwal Web & Tech"
        description="Admin login for Baranwal Web & Tech."
      />

      <main className="admin-login-page">
        <section className="admin-login-section">
          <div className="admin-login-container">
            <div className="admin-login-header">
              <p className="admin-login-eyebrow">ADMIN ACCESS</p>

              <h1>
                Sign in to
                <br />
                your dashboard.
              </h1>

              <p>Manage project enquiries and keep track of their status.</p>
            </div>

            <form
              className="admin-login-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="admin-form-field">
                <label htmlFor="username">Username</label>

                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="username"
                  placeholder="Enter username"
                />
              </div>

              <div className="admin-form-field">
                <label htmlFor="password">Password</label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  placeholder="Enter password"
                />
              </div>

              {error && (
                <div className="admin-login-error" role="alert">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="admin-login-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign In"}

                {!isSubmitting && <ArrowUpRight size={17} />}
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default AdminLogin;
