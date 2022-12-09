import { Component } from "react";
import { withRouter } from "react-router-dom";
import { PropertyList } from "../components/propertyList/propertyList.jsx";
import { Page } from "../components/page/page.jsx";
import { PropertyFilter } from "../components/propertyFilter/propertyFilter.jsx";
import { Sidebar } from "../components/sidebar/sidebar.jsx";
import { Loading } from "../components/loading/loading.jsx";
import queryStr from 'query-string';


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

    const pageParams = !this.state.page ? "page=1" : `page=${this.state.page}`;
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
    console.log("This fetch data started")
  console.log(queryString)
  
    const answer = queryString;
  // console.log(answer)
 
 
  await fetch("/api/properties/"+answer).then((result) => 
    result.json()
  ).then((result)=>{
    this.setState({properties:result.properties, pages:result.pages,filterOptions:this.calcFilterOptions(result.properties)})});
}

  
  updateUrl(){
   
    const url = this.buildQueryString();
    window.history.pushState({}, '', url);

  }

  componentDidMount() {
    const filterNewValues = queryStr.parse(window.location.search);
    this.setState(prevState => ({ ...prevState, filterValues: filterNewValues }), () => this.qwert2())
    const queryString = this.buildQueryString(this.state.filterValues);
    console.log(queryString)

    
    this.fetchData(queryString).then((state) => {
      this.setState({
        ...state,
        isLoading: false,
      });
    });
  }

  qwert2(newFilterValues) {
    const queryString = this.buildQueryString(newFilterValues);
    console.log(queryString)
    this.fetchData(queryString);
  }


  changePage(newPage){
this.setState ( prevState => ({
  ...prevState,
page: newPage,
  
  }));
    const queryString = this.buildQueryString(newPage);
    this.updateUrl(queryString)
    this.fetchData(queryString);
  }




  updateFilterValues(newFilterValues){
    this.setState(prevState => ({
      ...prevState,
      filterValues: newFilterValues,
    }), () => this.qwert(newFilterValues)
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
