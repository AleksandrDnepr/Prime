import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../components/header/header";
import PropertyList from "../components/propertyList/propertyList";
import Footer from "../components/footer/footer";
import data from '../data.json';

class Index extends Component {

  render() {

const { apartaments } = data;
console.log(apartaments);
const { images, type, title,location, description, details} = apartaments;

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
