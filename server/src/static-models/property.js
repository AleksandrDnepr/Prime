const properties = require("../data/properties.json");
const { Agent } = require("../models");

module.exports = class Property {
  static PROPERTIES = properties.apartaments;

  static findById(id) {
    return Property.PROPERTIES.find((property) => property.id === id);
  }

  static findAll() {
    return [...Property.PROPERTIES];
  }

  static async filterAll(filterParams) {
    let filtredPropeties = [];

    if (filterParams === {}) {
      filtredPropeties = [...Property.PROPERTIES];
    }

    const {
      location,
      type,
      deal,
      minYear,
      bedrooms,
      bathrooms,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      agentEmail,
    } = filterParams;

    const agent = await Agent.findOne({
      where: {
        email: filterParams.agentEmail,
      },
    });

    filtredPropeties = Property.PROPERTIES.filter((property) => {
      if (location && property.location[1] !== location) {
        return false;
      }
      if (type && property.type !== type) {
        return false;
      }
      if (deal && property.deal !== deal) {
        return false;
      }
      if (bedrooms && property.details.bedrooms !== parseInt(bedrooms)) {
        return false;
      }
      if (bathrooms && property.details.bathrooms !== parseInt(bathrooms)) {
        return false;
      }
      if (minYear && property.details.year < minYear) {
        return false;
      }
      if (minPrice && property.price < minPrice) {
        return false;
      }
      if (maxPrice && property.price > maxPrice) {
        return false;
      }
      if (minArea && property.details.area < minArea) {
        return false;
      }
      if (maxArea && property.details.area > maxArea) {
        return false;
      }

      const attachedId = Number(property.attached_agents_id);

      if (!agent || (agentEmail && attachedId !== agent.id)) {
        return false;
      }

      return true;
    });

    return filtredPropeties;
  }
};
