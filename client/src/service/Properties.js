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
     const parsed = queryString.parse(window.location.search);
     
     const fromUrl = Object.keys(parsed)
       .map((key) =>
         (key) +
           "=" +
          (parsed[key])
       )
       .join("&");
       const out =("?"+fromUrl);
       console.log("This is: "+out);
    //  console.log("parsed values:"+parsed)
    const params = Properties.buildParams();
    //  console.log("Params from url:" )
    // console.log("Params from load data:"+params)
     
  const result = await fetch("/api/properties" + ((Object.keys(parsed)===0)?params:out)).then((data) =>
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
    filterValues: Properties.filterValues || {},
  };

  return response;
}
  
  static buildParams() {
    
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
    // console.log('?' + filterParams + pageParams);
    // console.log(window.location)
    return '?' + filterParams + pageParams;
  }
}
