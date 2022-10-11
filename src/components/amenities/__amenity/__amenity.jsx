import React, { Component } from "react";
import "./__amenity.css";

export default class Amenity extends Component {
  render() {
    const { isAvailable, title } = this.props.item;
    const status = isAvailable ? "✓" : "✗";

    return (
      <li className="amenity__item">
        <span className="amenity__status">{status}</span>
        <span className="amenity__title">{title}</span>
      </li>
    );
  }
}

