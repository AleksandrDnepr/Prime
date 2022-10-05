import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { properties } from "./index.jsx";

class Property extends Component {
  render() {
    const { property_id } = this.props.match.params;
    const flat = properties.find((item) => {
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
      </>
    );
  }
}

export default withRouter(Property);
