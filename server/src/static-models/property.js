const properties = require('../data/properties.json');
const Agent = require("../models/agent.js");

module.exports = class Property {
  static PROPERTIES = properties.apartaments;

  static findById(id) {
      return Property.PROPERTIES.find(property => property.id === id);
  }

  static findAll() {
      return [...Property.PROPERTIES];
  }

  static filterAll(filterParams) {
    let filtredPropeties;

    if(filterParams === {}) {filtredPropeties = [...Property.PROPERTIES]}
    
    const { location, type, deal, minYear, bedrooms, bathrooms, minPrice, maxPrice, minArea, maxArea, agent } = filterParams;
    
    const isNumber = (value) => typeof value === "number";
    filtredPropeties = Property.PROPERTIES.filter( property => {
      
        if (location && property.location[1] !== location) {return false};
        if (type && property.type !== type) {return false};
        if (deal && property.deal !== deal) {return false};
        if (isNumber(bedrooms) && property.details.bedrooms !== bedrooms) {return false};
        if (isNumber(bathrooms) && property.details.bathrooms !== bathrooms) {return false};
        if (minYear && property.details.year < minYear) {return false};
        if (minPrice && property.price < minPrice) {return false}
        if (maxPrice && property.price > maxPrice) {return false}
        if (minArea && property.details.area < minArea) {return false}
        if (maxArea && property.details.area > maxArea) {return false}
        
        return true;
      })
      
    return filtredPropeties;
  }

    static filterByAgent(email) {
      const attachedAgents = Agent.findByEmail(email);

      return Property.PROPERTIES.filter(property => property.attached_agents_id === attachedAgents.id);
  }

    static pageLimit() {
      return Property.PROPERTIES.find(property => property.id === id);
  }


};
