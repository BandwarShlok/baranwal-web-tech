const Enquiry = require("../models/Enquiry");

const createEnquiry = async (req, res) => {
  try {
    const {
      name,
      business,
      email,
      phone,
      projectType,
      budget,
      message,
    } = req.body;

    if (!name || !email || !projectType || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, project type and message are required.",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const enquiry = await Enquiry.create({
      name: name.trim(),
      business: business?.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim(),
      projectType,
      budget,
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      enquiryId: enquiry._id,
    });
  } catch (error) {
    console.error("Create enquiry error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to submit enquiry.",
    });
  }
};

const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      enquiries,
    });
  } catch (error) {
    console.error("Get enquiries error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to fetch enquiries.",
    });
  }
};

const updateEnquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["new", "contacted", "closed"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid enquiry status.",
      });
    }

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { returnDocument: "after" },
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    res.json({
      success: true,
      message: "Enquiry status updated.",
      enquiry,
    });
  } catch (error) {
    console.error("Update enquiry status error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to update enquiry status.",
    });
  }
};

module.exports = {
  createEnquiry,
  getEnquiries,
  updateEnquiryStatus,
};