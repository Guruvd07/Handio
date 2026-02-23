const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProviderProfile",
    required: true
  },

  date: String,
  note: String,

  status: {
    type: String,
    enum: ["pending", "accepted", "completed", "rejected"],
    default: "pending"
  },

  reviewed: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
