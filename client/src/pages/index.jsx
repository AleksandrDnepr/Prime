import { Component } from "react";
import { withRouter } from "react-router-dom";
import { PropertyList } from "../components/propertyList/propertyList.jsx";
import { Page } from "../components/page/page.jsx";
import { PropertyFilter } from "../components/propertyFilter/propertyFilter.jsx";
import { Sidebar } from "../components/sidebar/sidebar.jsx";
import { Loading } from "../components/loading/loading.jsx";


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

  
  buildQueryString() {
    console.log("buildQuery started")
    console.log(this.state.filterValues);
    const filterParams = !this.state.filterValues
      ? ""
      : Object.keys(this.state.filterValues)
        .map((key) =>
          this.state.filterValues[key] === null ||
            this.state.filterValues[key] === ""
            ? ""
            : encodeURIComponent(key) +
            "=" +
            encodeURIComponent(this.state.filterValues[key])
        )
        .join("&") + "&";

    const pageParams = !this.page ? "page=1" : `page=${this.page}`;
    console.log(filterParams)

    let qStr = '?' + filterParams + pageParams;
    console.log(qStr)

    return qStr
  }

  calcFilterOptions(properties) {
    const filterOptions = { type: [], deal: [], location: [] };

    const unicLocations = new Set();
    properties.forEach((property) =>
      unicLocations.add(property.location[1])
    );

    const unicDeals = new Set();
    properties.forEach((property) => unicDeals.add(property.deal));

    const unicTypes = new Set();
    properties.forEach((property) => unicTypes.add(property.type));

    filterOptions.type = [...unicTypes];
    filterOptions.deal = [...unicDeals];
    filterOptions.location = [...unicLocations];

    return filterOptions
  }

  async fetchData(queryString){
  console.log(queryString)
  // onsole.log("fetchData was made")
    const answer = queryString;
  // console.log(answer)
 
 
  await fetch("/api/properties/"+answer).then((result) => 
    result.json()
  ).then((result)=>{
    this.setState({properties:result.properties,page:result.page,pages:result.pages,filterOptions:this.calcFilterOptions(result.properties)})});
}

  
  updateUrl(){

  }

  componentDidMount() {
    const queryString = this.buildQueryString(this.state.filterValues);
    this.fetchData(queryString).then((state) => {
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
    }), (prevState) => this.qwert(newFilterValues)
  );
  }

  qwert(newFilterValues) {
  const queryString = this.buildQueryString(newFilterValues);
  console.log(queryString)
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
