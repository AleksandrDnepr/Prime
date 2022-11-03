import { Component } from "react";
import { withRouter } from "react-router-dom";
import { PropertyList } from "../components/propertyList/propertyList.jsx";
import { Page } from "../components/page/page.jsx";
import { PropertyFilter } from "../components/propertyFilter/propertyFilter.jsx";
import { Sidebar } from "../components/sidebar/sidebar.jsx"
// import data from '../data.json';

class Index extends Component {
  state = {
    properties: null,
    isFiltred: false,
    filtredProperties: [],
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
        setTimeout(()=> { this.setState({ properties: data.properties, isLoading: false }) }, 2000));

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
  
  filterAction(nextValues) {
    window.scrollTo(0, 0);

    const { location, type, deal, minYear, bedrooms, bathrooms, minPrice, maxPrice, minArea, maxArea } = nextValues;
    const { properties } = this.state;
    const isNumber = (value) => typeof value === "number";
    const shownPropeties = properties.filter( property => {

      if (location && property.location[1] !== location) {return false};
      if (type && property.type !== type) {return false};
      if (deal && property.deal !== deal) {return false};
      if (isNumber(bedrooms) && property.details.bedrooms !== bedrooms) {return false};
      if (isNumber(bathrooms) && property.details.bathrooms !== bathrooms) {return false};
      if (minYear && property.details.year < minYear) {return false};
      if (minPrice && property.price < minPrice) {return false}
      if (maxPrice && property.price > maxPrice) {return false}
      if (minArea && property.details.area < minArea) {return false}
      if (maxArea && property.details.area > maxArea) {return false}

      return true;
    })
    
    this.setState({
      filterValues: nextValues, 
      isFiltred: true, 
      filtredProperties: shownPropeties
    });
  }

  render() {
    const {properties, filterValues, filterOptions, filtredProperties, isFiltred} = this.state;
    
    return (
      <Page title="PROPERTIES" withSidebar>
        <PropertyList
          defaultView="grid"
          properties={isFiltred ? filtredProperties : properties}
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
