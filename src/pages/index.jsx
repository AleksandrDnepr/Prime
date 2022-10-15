import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {PropertyList} from "../components/propertyList/propertyList.jsx";
import data from '../data.json';
import {Page} from "../components/page/Page.jsx";

class Index extends Component {  

  render() {    

const { apartaments } = data;

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
