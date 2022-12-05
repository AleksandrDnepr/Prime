import queryString from 'query-string'

export class Properties {
  constructor(page, filterValues) {
    this.page = page;
    this.filterValues = filterValues;
  }

  static setPage(page) {
    this.page = page;
    return this.loadData();
  }

  static setFilters(filterValues) {
    this.filterValues = { ...this.filterValues, filterValues};
    this.setPage(1);
    return this.loadData();
  }

   static async loadData() {
    
    const params = Properties.buildParams();
    
   
    
  const result = await fetch("/api/properties" + params).then((data) =>
    data.json()
  );


  const filterOptions = { type: [], deal: [], location: [] };

  const unicLocations = new Set();
  result.properties.forEach((property) =>
    unicLocations.add(property.location[1])
  );

  const unicDeals = new Set();
  result.properties.forEach((property) => unicDeals.add(property.deal));

  const unicTypes = new Set();
  result.properties.forEach((property) => unicTypes.add(property.type));

  filterOptions.type = [...unicTypes];
  filterOptions.deal = [...unicDeals];
  filterOptions.location = [...unicLocations];


  const response = {
    properties: result.properties,
    pages: result.pages,
    page: Properties.page || 1,
    filterOptions,
    filterValues: Properties.filterValues || queryString.parse(window.location.search),
  };

  return response;
}

  
  static buildParams() {
    if(this.filterValues===undefined){
      const parsed = queryString.parse(window.location.search);
      const fromUrl = Object.keys(parsed)
        .map((key) =>
          (key) +
          "=" +
          (parsed[key])
        )
        .join("&");
      
      // const pageParams = !this.page ? "page=1" : `page=${this.page}`;
      const out = ("?" + fromUrl);
return out;
    }
    
    const filterParams = !this.filterValues
      ? ""
      : Object.keys(this.filterValues.filterValues)
          .map((key) =>
            this.filterValues.filterValues[key] === null ||
            this.filterValues.filterValues[key] === ""
              ? ""
              : encodeURIComponent(key) +
                "=" +
                encodeURIComponent(this.filterValues.filterValues[key])
          )
          .join("&") + "&";

    const pageParams = !this.page ? "page=1" : `page=${this.page}`;

    return '?' + filterParams + pageParams;
  }
}
