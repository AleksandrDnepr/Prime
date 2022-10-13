import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropertyList from "../components/propertyList/propertyList";
import data from '../data.json';
import Page from "../components/page/Page";
import DropDown from "../components/dropDown/DropDown";

class Index extends Component {

  render() {

    const { apartaments } = data;

    return (
      <>
        <Page title="PROPERTIES">
          <DropDown
            onChange={(name, nextValue) => console.log(`Value changed to ${nextValue} and this is the ${name} dropdown`)}
            value="apt"
            name='propertyType'
            options={[
              { 'value': 'single', 'label': 'Single-family' },
              { 'value': 'house', 'label': 'Townhouse' },
              { 'value': 'apt', 'label': 'Apartment' },
            ]}
            placeholder="Type"
          />
          <PropertyList
            defaultView="grid"
            properties={apartaments}
          />
        </Page>
      </>
    );
  }
}

export default withRouter(Index);
