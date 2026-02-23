const Provider = require("../models/ProviderProfile");

exports.verifyProvider = async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);

    if (!provider) {
      return res.status(404).json({ msg: "Provider not found" });
    }

    // ✅ IMPORTANT — correct field name
    provider.verified = true;

    await provider.save();

    res.json({ msg: "Provider verified" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
