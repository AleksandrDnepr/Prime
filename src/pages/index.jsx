import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {PropertyList} from "../components/propertyList/propertyList.jsx";
import data from '../data.json';
import {Page} from "../components/page/page.jsx";
import {Sidebar} from "../components/sidebar/sidebar"
import PropertyFilter from "../components/propertyFilter/propertyFilter.jsx";


class Index extends Component {
  state = {
    filterOptions: {
      type: [],
      deal: [],
      location: [],
    },

    filterValues: {},
  }
  componentDidMount(){
    const {apartaments} = data;
    // const {filterOptions} = this.state;
      
      const availableLocations = [];
      apartaments.map(item => availableLocations.push(item.location[1]));
      const unicLocations = [...new Set(availableLocations) ];
  
      const availableDeals = [];
      apartaments.map(item => availableDeals.push(item.deal));
      const unicDeals = [...new Set(availableDeals) ];
  
      const availableType = [];
      apartaments.map(item => availableType.push(item.type));
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
  
  filterAction(nextVelues) {
    this.setState({filterValues: nextVelues})
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
    
    const { apartaments } = data;
    const {filterValues, filterOptions} = this.state;
    return (
      <>
        <Page title="PROPERTIES" withSidebar={true}>
          <PropertyList
            defaultView="grid"
            properties={apartaments}
          />
          <Sidebar>
          <input id="comp-name" name="comp-name" type="text"/>
          <input id="comp-name" name="comp-name" type="text"/>
          <input id="comp-name" name="comp-name" type="text"/>
          <input id="comp-name" name="comp-name" type="text"/>
          <input id="comp-name" name="comp-name" type="text"/>
          <input id="comp-name" name="comp-name" type="text"/>
          <input id="comp-name" name="comp-name" type="text"/>
          </Sidebar>
        </Page>
      </>
    );
  }
}

export default withRouter(Index);
