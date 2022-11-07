export class Properties {

    constructor(page, filters){
        this.page = page;
        this.filters = filters;
    }

    setPage(page) {
        this.page = page;
        return
    }

    setFilters(filters) {
        this.filters = {...this.filters, filters};
        this.setPage(1);
        return this.loadData;
    }

    async loadData() {
        const result = await fetch ("/api/properties")
    }
}