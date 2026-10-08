require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/enquiryRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Baranwal Web & Tech API is running.",
  });
});

app.use("/api/enquiries", enquiryRoutes);
app.use("/api/admin", adminRoutes);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
