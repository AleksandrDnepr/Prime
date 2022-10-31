const properties = require('../data/properties.json')

module.exports = class Property {
  static PROPERTIES = properties.apartaments;

  static findById(id) {
      return Property.PROPERTIES.find(property => property.id === id);
  }

  static findAll() {
      return [...Property.PROPERTIES];
  }
};
