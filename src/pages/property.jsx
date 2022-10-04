import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { flats } from "./index.jsx";

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
        <Link to="/properties">Index</Link>
        <div>flat.id = {flat.id}</div>
        <div>flat.city = {flat.city}</div>
        <div>flat.rooms = {flat.rooms}</div>
      </>
    );
  }
}

export default withRouter(Property);
