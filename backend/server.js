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

app.set("trust proxy", 1);

app.use(helmet());
app.use(compression());

app.use(
  cors({
    origin: ["https://handio-frontend.onrender.com"],
    credentials: true,
  })
);

app.use(express.json());

/* ===========================
   ROUTES (STANDARDIZED)
=========================== */

app.use("/api/providers", providerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/reviews", reviewRoutes);

/* ===========================
   HEALTH CHECK
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
