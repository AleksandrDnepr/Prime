/* eslint-disable no-unused-vars */
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

  componentDidMount() {
    Properties.loadData().then((state) => {

      this.setState({
        properties: state.properties,
        pages: state.pages,
        page: state.page,
        filterOptions: state.options,
        filterValues: state.filters,
        
        isLoading: false,
      })}
    );
  }

    changeFilters(filters) {
      window.scrollTo(0, 0);

    Properties.setFilters(filters).then((state) => 
      this.setState({
        properties: state.properties,
        pages: state.pages,
        page: state.page,
        filterOptions: state.options,
        filterValues: state.filters,
        
        isLoading: false,
      }));
  }

  changePage(page) {
    window.scrollTo(0, 0);

    Properties.setPage(page).then((state) => this.setState({
      properties: state.properties,
      pages: state.pages,
      page: state.page,
      filterOptions: state.options,
      filterValues: state.filters,
      
      isLoading: false,
    }));
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
