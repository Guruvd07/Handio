const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
require("dotenv").config();

const connectDB = require("./config/db");

/* ROUTES */
const providerRoutes = require("./routes/providerRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

/* ===========================
   SECURITY & PERFORMANCE
=========================== */

// Important when deployed behind Render proxy
app.set("trust proxy", 1);

// Security headers
app.use(helmet());

// Gzip compression
app.use(compression());

// CORS (IMPORTANT — restrict in production)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend-name.onrender.com"
    ],
    credentials: true,
  })
);

app.use(express.json());

/* ===========================
   ROUTES
=========================== */

app.use("/providers", providerRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/bookings", bookingRoutes);
app.use("/api/reviews", reviewRoutes);

/* ===========================
   HEALTH CHECK (for uptime ping)
=========================== */

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

/* Root */
app.get("/", (req, res) => {
  res.send("Handio Backend Running");
});

/* ===========================
   DATABASE
=========================== */

connectDB();

/* ===========================
   SERVER
=========================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});