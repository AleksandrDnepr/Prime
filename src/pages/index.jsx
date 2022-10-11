import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropertyList from "../components/propertyList/propertyList";
import data from '../data.json';
import Page from "../components/page/Page";

class Index extends Component {

  render() {

    const { apartaments } = data;

    return (
      <>
        <Page title="PROPERTIES">
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
