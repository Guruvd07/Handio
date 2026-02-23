const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/reviewController");
const auth = require("../middlewares/authMiddleware");

/* =========================
   CREATE REVIEW
========================= */

router.post("/", auth, reviewController.createReview);


/* =========================
   GET REVIEWS FOR PROVIDER
========================= */

router.get(
  "/provider/:providerId",
  reviewController.getProviderReviews
);

module.exports = router;
