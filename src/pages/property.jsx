import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { flats } from "./index.jsx";

import HeaderMain from "../components/header/header";
import Title from "../components/title/title.jsx";



class Property extends Component {
  render() {
    const { property_id } = this.props.match.params;
    const flat = flats.find((item) => {
      return item.id === property_id;
    });
    if (!flat) {
      this.props.history.push("/page_not_found");
      return;
    }
    return (
      <>
        <Link to="/">Index</Link>

        <div>flat.id = {flat.id}</div>
        <div>flat.city = {flat.city}</div>
        <div>flat.rooms = {flat.rooms}</div>

        <>
        <HeaderMain title={"name of appartament"}/>
        <Title 
            name="Verona at Parkbridge II by DR Horton"
            location={['Natomas', 'Sacramento']}
            type="Townhouse"
            details={{ area: 1320, bedrooms: 2, bathrooms: 2 }}
            mode="list"
            area={1932}
            bedrooms={4}
            bathrooms={3}
            id="A003N" />

        </>
      </>
    );
  }
}

export default withRouter(Property);
