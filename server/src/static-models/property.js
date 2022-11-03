const properties = require('../data/properties.json')

module.exports = class Property {
  static PROPERTIES = properties.apartaments;

  static findById(id) {
      return Property.PROPERTIES.find(property => property.id === id);
  }

  static findAll() {
      return [...Property.PROPERTIES];
  }

  static filterAll(filterParams) {

    const { location, type, deal, minYear, bedrooms, bathrooms, minPrice, maxPrice, minArea, maxArea } = filterParams;
    
    const isNumber = (value) => typeof value === "number";
    const filtredPropeties = Property.PROPERTIES.filter( property => {
      
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

    static pageLimit() {
      return Property.PROPERTIES.find(property => property.id === id);
  }


};
