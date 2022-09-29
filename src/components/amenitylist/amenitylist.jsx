import React, { Component } from "react";
import AmenityListItem from "../amenitylistitem/amenitylistitem";

export default class AmenityList extends Component {
  render() {
    const { amenities }= this.props;

    return (  
    <section>
        <h3>AmenityList</h3>
        <ul>
          {amenities.map((item) => (
            <AmenityListItem item={item} key={item.title}/>
          ))}
        </ul>
      </section>
    );
  }
}

