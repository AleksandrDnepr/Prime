import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { PropertyList } from "../components/propertyList/propertyList.jsx";
import { Page } from "../components/page/page.jsx";
import { PropertyFilter } from "../components/propertyFilter/propertyFilter.jsx";
import { Sidebar } from "../components/sidebar/sidebar.jsx"
import data from '../data.json';

class Index extends Component {
  state = {
    properties: data.apartaments,
    isFiltred: false,
    filtredProperties: [],
    filterOptions: {
      type: [],
      deal: [],
      location: [],
    },
    filterValues: {},
  }

  componentDidMount(){
    const { properties } = this.state;
      
      const availableLocations = [];
      properties.map(item => availableLocations.push(item.location[1]));
      const unicLocations = [...new Set(availableLocations) ];
  
      const availableDeals = [];
      properties.map(item => availableDeals.push(item.deal));
      const unicDeals = [...new Set(availableDeals) ];
  
      const availableType = [];
      properties.map(item => availableType.push(item.type));
      const unicTypes = [...new Set(availableType) ];

      this.setState({
        filterOptions: {
          ...this.state.filterOptions,
          type: unicTypes,
          deal: unicDeals,
          location: unicLocations
        }
    })
  }  
  
  filterAction(nextValues) {
    console.log("start filterAction");
    const { properties } = this.state;
    const shownPropeties = properties.filter(property => {
      if(nextValues.location && property.location[1] !== nextValues.location) {return false};
      if(nextValues.type && property.type !== nextValues.type) {return false};
      if(nextValues.deal && property.deal !== nextValues.deal) {return false};
      if(nextValues.minYear && property.details.year < nextValues.minYear) {return false};
      if(nextValues.bedrooms && property.details.bedrooms !== nextValues.bedrooms) {return false};
      if(nextValues.bathrooms && property.details.bathrooms !== nextValues.bathrooms) {return false};
      if(nextValues.minPrice && property.price < nextValues.minPrice) {return false}
      if(nextValues.maxPrice && property.price > nextValues.maxPrice) {return false}
      if(nextValues.minArea && property.details.area < nextValues.minArea) {return false}
      if(nextValues.maxArea && property.details.area > nextValues.maxArea) {return false}

      return true;
    })
    
    this.setState({
      filterValues: nextValues, 
      isFiltred: true, 
      filtredProperties: shownPropeties});
  }

  render() {
    const {properties, filterValues, filterOptions, filtredProperties, isFiltred} = this.state;
    
    return (
      <>
        <Page title="PROPERTIES" withSidebar>
          
          <PropertyList
            defaultView="grid"
            properties={isFiltred ? filtredProperties : properties}
          />
          <Sidebar>
            <PropertyFilter
              values={filterValues}
              options={filterOptions}
              onSubmit={ (nextValues) => this.filterAction(nextValues)}
            />
          </Sidebar>
        </Page>
      </>
    );
  }
}

export default withRouter(Index);
