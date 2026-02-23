const express = require("express");
const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");
const { verifyProvider } = require("../controllers/adminController");
const Provider = require("../models/ProviderProfile");

const router = express.Router();

/* VERIFY PROVIDER */
router.patch(
  "/verify/:id",
  auth,
  role("admin"),
  verifyProvider
);

/* LIST ALL PROVIDERS */
router.get(
  "/providers",
  auth,
  role("admin"),
  async (req, res) => {
    const providers = await Provider.find()
      .populate("userId", "name email");

    res.json(providers);
  }
);

module.exports = router;   // ✅ MUST BE LAST LINE
