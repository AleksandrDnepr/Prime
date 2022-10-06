import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/header/header";
import PropertyList from "../components/propertyList/propertyList";
import Footer from "../components/footer/footer";
import data from "../data.json";

class Index extends Component {

  render() {

const { apartaments } = data;

    return (
      <>
        <Header title="PROPERTIES" />
        <PropertyList
          defaultView="grid"
          properties={apartaments} 
        />
        <Footer />
      </>
    );
  }
}

export default withRouter(Index);
