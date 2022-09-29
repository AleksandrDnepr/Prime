import React, { Component } from "react";
import AmenityListItem from "../amenitylistitem/amenitylistitem";
import "./amenitylist.css"

export default class AmenityList extends Component {
  render() {
    const { amenities }= this.props;

    return (  
    <section className="amenity amenity__section">
        <h3>AmenityList</h3>
        <ul className="amenity__list">
          {amenities.map((item) => (
            <AmenityListItem item={item} key={item.title}/>
          ))}
        </ul>
      </section>
    );
  }
}

