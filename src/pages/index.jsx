import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {PropertyList} from "../components/propertyList/propertyList.jsx";
import data from '../data.json';
import {Page} from "../components/page/page.jsx";
import PropertyFilter from "../components/propertyFilter/propertyFilter.jsx";

import {Sidebar} from "../components/sidebar/sidebar"

class Index extends Component {
  state = {
    properties: data.apartaments,
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
    this.setState({filterValues: nextValues})
  }

  filtredData(values){
    let shownPropeties = data.apartaments;
    shownPropeties.filter(property => {
      if(values.location && property.location !== values.location) {return false};
      return true;
    })
    return shownPropeties;
  }

  render() {
    const {properties, filterValues, filterOptions} = this.state;
    
    return (
      <>
        <Page title="PROPERTIES">
          
          <PropertyList
            defaultView="grid"
            properties={properties}
          />
          <Sidebar>
            <PropertyFilter
              values={filterValues}
              options={filterOptions}
              onSubmit={(nextValues) => {
                this.filterAction(nextValues)
                console.log(`Next values are: ${JSON.stringify(nextValues)}`)
            }}
            />
          </Sidebar>
        </Page>
      </>
    );
  }
}

export default withRouter(Index);
