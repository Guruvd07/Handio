const Provider = require("../models/ProviderProfile");

exports.createProfile = async (req, res) => {
  try {
    const profile = await Provider.create({
      userId: req.user.id,
      category: req.body.category,
      experience: req.body.experience,
      description: req.body.description,
      city: req.body.city,
      area: req.body.area,
      pincode: req.body.pincode,
      price: req.body.price,
    });

    res.json(profile);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
