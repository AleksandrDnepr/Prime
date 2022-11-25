const properties = require('../data/properties.json');
const Agent = require("../static-models/agent.js");

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
    
    const { location, type, deal, minYear, bedrooms, bathrooms, minPrice, maxPrice, minArea, maxArea, agentEmail } = filterParams;

    filtredPropeties = Property.PROPERTIES.filter( property => {
      
        if (location && property.location[1] !== location) {return false};
        if (type && property.type !== type) {return false};
        if (deal && property.deal !== deal) {return false};
        if (bedrooms && property.details.bedrooms !== parseInt(bedrooms)) {return false};
        if (bathrooms && property.details.bathrooms !== parseInt(bathrooms)) {return false};
        if (minYear && property.details.year < minYear) {return false};
        if (minPrice && property.price < minPrice) {return false}
        if (maxPrice && property.price > maxPrice) {return false}
        if (minArea && property.details.area < minArea) {return false}
        if (maxArea && property.details.area > maxArea) {return false}
        if (agentEmail && property.attached_agents_id !== Agent.findByEmail(agentEmail).id) {return false}
        
        return true;
      })
 
    return filtredPropeties;
  }
};

