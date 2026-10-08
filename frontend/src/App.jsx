import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Process from "./pages/Process";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />

      {/* Public Website Navigation */}
      {!isAdminPage && <Navbar />}

      <main>
        <Routes>
          {/*  PUBLIC WEBSITE  */}

          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          {/*  ADMIN  */}

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />

          {/*  404  */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Public Website Footer */}
      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;
