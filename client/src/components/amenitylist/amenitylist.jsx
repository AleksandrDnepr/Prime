import React, { Component } from "react";
import { AmenityListItem } from "../amenitylistitem/amenitylistitem.jsx";
import { Subtitle } from "../subtitle/subtitle.jsx";

import "./amenitylist.css";

export class AmenityList extends Component {
  render() {
    const { amenities } = this.props;

    return (
      <section className="amenity amenity__section">
        <Subtitle>Amenities</Subtitle>
        <ul className="amenity__list">
          {amenities.map((item) => (
            <AmenityListItem item={item} key={item.title} />
          ))}
        </ul>
      </section>
    );
  }
}
