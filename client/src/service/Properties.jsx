export class Properties {
  constructor(page, filters, properties) {
    this.page = page;
    this.filters = filters;
    this.properties=properties;
  }

  setPage(page) {
    this.page = page;
    return this.loadData();
  }

  setFilters(filters) {
    this.filters = { ...this.filters, filters };
    this.setPage(1);
    return this.loadData();
  }

  async loadData() {
    const result = await fetch("/api/properties").then((data) => data.json());

    const options = {};
    const unicLocations = new Set();
    result.properties.forEach((property) =>
      unicLocations.add(property.location[1])
    );
    const unicDeals = new Set();
    result.properties.forEach((property) => unicDeals.add(property.deal));
    const unicTypes = new Set();
    result.properties.forEach((property) => unicTypes.add(property.type));
    options.type = unicTypes;
    options.deal = unicDeals;
    options.location = unicLocations;

    return {
      properties: result.properties,
      pages: 4,
      page: 1,
      options,
      filters: this.filters,
    };
  }
}
