const { Router } = require("express");
const {
  Agent,
  Amenity,
  Message,
  Property,
  Image,
  Plan,
  PropertiesAmenities,
} = require("../models");

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
//   .post("/", addNewProperty)
//   .get("/:id", read)
//   .put("/:id", editProperty)
//   .delete("/:id", removeProperty)
//   .get("/:id/messages", getMessage)
//   .use('/:id', router);
