const express = require("express");
const rateLimit = require("express-rate-limit");

const {
  createEnquiry,
  getEnquiries,
  updateEnquiryStatus,
} = require("../controllers/enquiryController");

const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: "Too many enquiries submitted. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Public enquiry submission
router.post("/", enquiryLimiter, createEnquiry);

// Admin only
router.get("/", protectAdmin, getEnquiries);
router.patch("/:id/status", protectAdmin, updateEnquiryStatus);

module.exports = router;
