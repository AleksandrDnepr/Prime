const { Router } = require("express");
const { Property, Plan } = require("../models");

async function index(req, res) {
  const propId = req.baseUrl
    .replace("/api/properties/", "")
    .replace("/plans", "");

  const myProperty = await Property.findOne({
    where: {
      prop_id: propId,
    },
  });

  try {
    const itsPlans = await myProperty.getPlans();
    return res.json({
      plans: itsPlans,
    });
  } catch (err) {
    return res.status(500).json({ err: "An error occured" });
  }
}

module.exports = Router().get("/", index);
