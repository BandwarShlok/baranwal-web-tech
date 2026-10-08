import { useEffect, useState } from "react";
import { LogOut, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

import SEO from "../components/SEO";
import "../styles/admin-dashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    let cancelled = false;

    const loadEnquiries = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/enquiries`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await response.json();

        if (response.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
          return;
        }

        if (!response.ok) {
          throw new Error(data.message || "Unable to fetch enquiries.");
        }

        if (!cancelled) {
          setEnquiries(data.enquiries || []);
          setError("");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Fetch enquiries error:", error);

        if (!cancelled) {
          setError("Unable to load enquiries. Please try again.");
          setIsLoading(false);
        }
      }
    };

    loadEnquiries();

    return () => {
      cancelled = true;
    };
  }, [navigate, token]);

  const fetchEnquiries = async () => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/enquiries`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      if (response.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || "Unable to fetch enquiries.");
      }

      setEnquiries(data.enquiries || []);
    } catch (error) {
      console.error("Fetch enquiries error:", error);
      setError("Unable to load enquiries. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/enquiries/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status }),
        },
      );

      const data = await response.json();

      if (response.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || "Unable to update status.");
      }

      setEnquiries((previous) =>
        previous.map((enquiry) =>
          enquiry._id === id
            ? {
                ...enquiry,
                status: data.enquiry.status,
                updatedAt: data.enquiry.updatedAt,
              }
            : enquiry,
        ),
      );
    } catch (error) {
      console.error("Update status error:", error);
      setError("Unable to update enquiry status.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const totalEnquiries = enquiries.length;

  const newEnquiries = enquiries.filter(
    (enquiry) => enquiry.status === "new",
  ).length;

  const contactedEnquiries = enquiries.filter(
    (enquiry) => enquiry.status === "contacted",
  ).length;

  const closedEnquiries = enquiries.filter(
    (enquiry) => enquiry.status === "closed",
  ).length;

  return (
    <>
      <SEO
        title="Admin Dashboard | Baranwal Web & Tech"
        description="Manage project enquiries for Baranwal Web & Tech."
      />

      <main className="admin-dashboard-page">
        <div className="admin-dashboard-container">
          <header className="admin-dashboard-header">
            <div>
              <p className="admin-dashboard-eyebrow">ADMIN DASHBOARD</p>

              <h1>Project enquiries</h1>

              <p>Review incoming enquiries and keep their status up to date.</p>
            </div>

            <div className="admin-dashboard-actions">
              <button
                type="button"
                className="admin-refresh-button"
                onClick={fetchEnquiries}
                disabled={isLoading}
              >
                <RefreshCw size={16} />
                {isLoading ? "Refreshing..." : "Refresh"}
              </button>

              <button
                type="button"
                className="admin-logout-button"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </header>

          <section className="admin-stats">
            <div className="admin-stat">
              <span>Total</span>
              <strong>{totalEnquiries}</strong>
            </div>

            <div className="admin-stat">
              <span>New</span>
              <strong>{newEnquiries}</strong>
            </div>

            <div className="admin-stat">
              <span>Contacted</span>
              <strong>{contactedEnquiries}</strong>
            </div>

            <div className="admin-stat">
              <span>Closed</span>
              <strong>{closedEnquiries}</strong>
            </div>
          </section>

          {error && (
            <div className="admin-dashboard-error" role="alert">
              {error}
            </div>
          )}

          <section className="admin-enquiries-section">
            <div className="admin-section-heading">
              <div>
                <p className="admin-section-label">INCOMING PROJECTS</p>
                <h2>Enquiries</h2>
              </div>
            </div>

            {isLoading ? (
              <div className="admin-empty-state">Loading enquiries...</div>
            ) : enquiries.length === 0 ? (
              <div className="admin-empty-state">No project enquiries yet.</div>
            ) : (
              <div className="admin-enquiries-list">
                {enquiries.map((enquiry) => (
                  <article className="admin-enquiry" key={enquiry._id}>
                    <div className="admin-enquiry-main">
                      <div className="admin-enquiry-title">
                        <h3>{enquiry.name}</h3>

                        <span
                          className={`admin-status admin-status-${enquiry.status}`}
                        >
                          {enquiry.status}
                        </span>
                      </div>

                      <div className="admin-enquiry-meta">
                        <span>{enquiry.email}</span>

                        {enquiry.phone && <span>{enquiry.phone}</span>}

                        {enquiry.business && <span>{enquiry.business}</span>}
                      </div>

                      <div className="admin-enquiry-project">
                        <strong>{enquiry.projectType}</strong>

                        {enquiry.budget && <span>{enquiry.budget}</span>}
                      </div>

                      <p className="admin-enquiry-message">{enquiry.message}</p>

                      <p className="admin-enquiry-date">
                        {new Date(enquiry.createdAt).toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="admin-enquiry-status">
                      <label htmlFor={`status-${enquiry._id}`}>Status</label>

                      <select
                        id={`status-${enquiry._id}`}
                        value={enquiry.status}
                        onChange={(event) =>
                          updateStatus(enquiry._id, event.target.value)
                        }
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default AdminDashboard;
