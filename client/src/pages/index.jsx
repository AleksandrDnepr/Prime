import { Component } from "react";
import { withRouter } from "react-router-dom";
import { PropertyList } from "../components/propertyList/propertyList.jsx";
import { Page } from "../components/page/page.jsx";
import { PropertyFilter } from "../components/propertyFilter/propertyFilter.jsx";
import { Sidebar } from "../components/sidebar/sidebar.jsx";
import { Loading } from "../components/loading/loading.jsx";
import { Properties } from "../service/Properties.js";


class Index extends Component {
  state = {
    properties: null,
    page: null,
    pages: null,
    mode: "grid",
    filterOptions: {
      type: [],
      deal: [],
      location: [],
    },
    filterValues: {},
    isLoading: true,
  };

  


async fetchData(){
  console.log(this.calculateFilterOptions());
  const xxx = this.calculateFilterOptions();
  const fetchDataResult = await fetch("/api/properties/"+xxx).then((result) => 
    result.json()
  );
  
  const filterOptions = { type: [], deal: [], location: [] };

  const unicLocations = new Set();
  fetchDataResult.properties.forEach((property) =>
    unicLocations.add(property.location[1])
  );

  const unicDeals = new Set();
  fetchDataResult.properties.forEach((property) => unicDeals.add(property.deal));

  const unicTypes = new Set();
  fetchDataResult.properties.forEach((property) => unicTypes.add(property.type));

  filterOptions.type = [...unicTypes];
  filterOptions.deal = [...unicDeals];
  filterOptions.location = [...unicLocations];


  const response = {
    properties: fetchDataResult.properties,
    pages: fetchDataResult.pages,
    page:  1,
    filterOptions,
    filterValues: this.state.filterValues,
  };

  return response;
}

  calculateFilterOptions(){
    console.log(this.state.filterValues);
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

  buildQueryString() {}

  updateUrl(){

  }

  componentDidMount() {
    
    this.fetchData().then((state) => {
      this.setState({
        ...state,
        isLoading: false,
      });
    });
  }

  changePage(newPage){
this.setState ( prevState => ({
  ...prevState,
page: newPage,
  
  }));
  const queryString = this.buildQueryString();
    this.updateUrl(queryString)
    this.fetchData(queryString);
  }


  updateFilterValues(newFilterValues){
    this.setState(prevState => ({
      ...prevState,
      filterValues: newFilterValues,

    }));
    const queryString = this.buildQueryString();
    this.updateUrl(queryString)
    this.fetchData(queryString);
  }


  // changeFilters(filters) {
  //   window.scrollTo(0, 0);
    
  //   Properties.setFilters(filters).then((state) =>
  //     this.setState({
  //       ...state,
  //       isLoading: false,
  //     })
  //   );
  //   const url = Properties.buildParams();
  //   window.history.pushState({}, '', url);
  // }

  // async changePage(page) {
  //   window.scrollTo(0, 0);

  //   Properties.setPage(page).then((state) =>
  //     this.setState({
  //       ...state,
  //       isLoading: false,
  //     })
  //   );
  // }

  showLoader(isLoading) {
    return isLoading && <Loading />;
  }

  render() {
    const {
      properties,
      filterValues,
      filterOptions,
      isLoading,
      page,
      pages,
      mode,
    } = this.state;

    if (!properties) {
      return;
    }

    return (
      <Page title="PROPERTIES" withSidebar>
        {this.showLoader(isLoading)}

        <PropertyList
          properties={properties}
          page={page}
          pages={pages}
          mode={mode}
          changePage={(page) => this.changePage(page)}
          changeMode={(mode) => this.setState({ mode: mode })}
        />

        <Sidebar>
          <PropertyFilter
            values={filterValues}
            options={filterOptions}
            onSubmit={(nextValues) => this.updateFilterValues(nextValues)}
          />
        </Sidebar>
      </Page>
    );
  }
}

export default withRouter(Index);
