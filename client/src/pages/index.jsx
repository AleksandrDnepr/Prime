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
    mode: null,
    filterOptions: {
      type: [],
      deal: [],
      location: [],
    },
    filterValues: {},
    isLoading: true,
  }

  componentDidMount(){

    async function fetchProperties() {
      const response = await fetch('/api/properties');
      const properties = await response.json();
      return properties;
    }
    
    fetchProperties()
      .then(data => 
          this.setState({ 
            properties: data.properties, 
            page: data.page,
            pages: data.pages,
            mode: data.mode,
            isLoading: false 
          }) )

    fetchProperties()
      .then((data) => {
        const { properties } = data;
        
        const unicLocations = new Set();
        properties.forEach(property => unicLocations.add(property.location[1]));

        const unicDeals = new Set();
        properties.forEach(property => unicDeals.add(property.deal));

        const unicTypes = new Set();
        properties.forEach(property => unicTypes.add(property.type));

        this.setState({
          filterOptions: {
            ...this.state.filterOptions,
            type: Array.from(unicTypes),
            deal: Array.from(unicDeals),
            location: Array.from(unicLocations)
          }
        })
    });
  }  

  async fetchPage(page){
    await fetch('/api/properties', {
      method: "POST",
      headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify({page: page}),
      })
      .then((response) => response.json())
      .then(data => {this.setState({
        properties: data.properties, 
        page: data.page,
        pages: data.pages,
        mode: data.mode,
        isLoading: false 
      });
      })
      .catch((err) => {
          console.log(err)
      });

  }
  
  async filterAction(nextValues) {
    window.scrollTo(0, 0);

    await fetch(`api/properties/`, {
      method: "POST",
      headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify(nextValues),
      })
      .then((response) => response.json())
      .then(data =>  this.setState({
        filterValues: nextValues, 
        isFiltred: true, 
        properties: data.properties
      }))
      .catch((err) => { console.log(err) });
  }

  showLoader(isLoading) {
    return isLoading && <Loading/>;
  }

  render() {
    const { properties, filterValues, filterOptions, isLoading, page, pages, mode } = this.state;

    if (!properties) {return}

    return (
      <Page title="PROPERTIES" withSidebar>
        {this.showLoader(isLoading)}
        <PropertyList
          page={page}
          pages={pages}
          defaultView={mode}
          properties={properties}
          handleChange={(page)=> this.fetchPage(page)}
        />

        <Sidebar>
          <PropertyFilter
            values={filterValues}
            options={filterOptions}
            onSubmit={(nextValues) => this.filterAction(nextValues)}
          />
        </Sidebar>
      </Page>
    );
  }
}

export default withRouter(Index);
