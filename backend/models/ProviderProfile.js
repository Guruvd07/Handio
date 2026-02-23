const mongoose = require("mongoose");

const providerProfileSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  category: {
    type: String,
    required: true
  },

  city: {
    type: String,
    required: true
  },

  area: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  /* =========================
     FLEXIBLE PRICING SYSTEM
  ========================= */

  priceAmount: {
    type: Number,
    required: true,
    min: 0
  },

  priceType: {
    type: String,
    enum: [
      "hour",
      "day",
      "month",
      "visit",
      "session",
      "fixed"
    ],
    required: true
  },

  /* =========================
     ADMIN + REVIEW FIELDS
  ========================= */

  verified: {
    type: Boolean,
    default: false
  },

  averageRating: {
    type: Number,
    default: 0
  },

  totalReviews: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

module.exports = mongoose.model("ProviderProfile", providerProfileSchema);
