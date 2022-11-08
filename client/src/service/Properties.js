export class Properties {
    constructor(page, filters) {
        this.page = page;
        this.filters = filters;
    }

    static setPage(page) {
        this.page = page;
        return this.loadData();
    }

    static setFilters(filters) {
        this.filters = { ...this.filters, filters };
        this.setPage(1);
        return this.loadData();
    }

    static loadData() {
        return loadData();
    }

    static buildParams() {

        const filterParams = !this.filters ? "" :
            Object.keys(this.filters.filters)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(this.filters.filters[key]))
                .join("&") + "&";

                const pageParams = !this.page ? "page=1" : `page=${this.page}`
        return "?" + filterParams + pageParams;
    }
}

    async function loadData() {
        const params = Properties.buildParams();
        
        const result = await fetch("/api/properties" + params)
                                .then((data) => data.json());

        const options = {type: [], deal: [], location: [],};

        const unicLocations = new Set();
        result.properties.forEach((property) =>
            unicLocations.add(property.location[1]));

        const unicDeals = new Set();
        result.properties.forEach((property) => unicDeals.add(property.deal));
        
        const unicTypes = new Set();
        result.properties.forEach((property) => unicTypes.add(property.type));
        
        options.type = [...unicTypes];
        options.deal = [...unicDeals];
        options.location = [...unicLocations];

        const response = {
            properties: result.properties,
            pages: result.pages,
            page: Properties.page || 1,
            options,
            filters: Properties.filters || {},
            };

        return response;
    }
