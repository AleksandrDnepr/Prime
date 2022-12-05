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
  const fetchDataResult = await fetch("/api/properties").then((result) => 
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
    filterValues: {},
  };

  return response;
}



  componentDidMount() {
    
    this.fetchData().then((state) => {
      this.setState({
        ...state,
        isLoading: false,
      });
    });
  }

  changeFilters(filters) {
    window.scrollTo(0, 0);
    
    Properties.setFilters(filters).then((state) =>
      this.setState({
        ...state,
        isLoading: false,
      })
    );
    const url = Properties.buildParams();
    window.history.pushState({}, '', url);
  }

  async changePage(page) {
    window.scrollTo(0, 0);

    Properties.setPage(page).then((state) =>
      this.setState({
        ...state,
        isLoading: false,
      })
    );
  }

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
            onSubmit={(nextValues) => this.changeFilters(nextValues)}
          />
        </Sidebar>
      </Page>
    );
  }
}

export default withRouter(Index);
