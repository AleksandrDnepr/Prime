import React, { Component } from "react";
import Amenity from "./__amenity/__amenity";
import Subtitle from "../subtitle/subtitle";

import "./amenities.css"

export default class Amenities extends Component {
  render() {
    const { amenities }= this.props;

    return (  
    <section className="amenity amenity__section">
        <Subtitle>Amenities</Subtitle>
        <ul className="amenity__list">
          {amenities.map((item) => (
            <Amenity item={item} key={item.title}/>
          ))}
        </ul>
      </section>
    );
  }
}

