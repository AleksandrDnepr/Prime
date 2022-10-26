const properties = require('../data/properties.json')

module.exports = class Property {
  static PROPERTIES = properties.apartaments;

  constructor(body) {
      const property = {...body};
      property.id = Property.PROPERTIES.length + 1;
      Property.PROPERTIES.push(property);
  }

  static findById(id) {
      return Property.PROPERTIES.find(property => property.id === id);
  }

  static findAll() {
      return [...Property.PROPERTIES];
  }
};
