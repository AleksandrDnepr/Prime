import React, { Component } from 'react';
import PropertyDetails from '../propertyDetails/propertyDetails';
import PropertyIcon from '../propertyIcon/propertyIcon';
import "./title.css";

export default class Title extends Component {

  apartOrHouse = (type) => {
    switch (type) {
      case "apartment":
        return "Apartment";
      case "townhouse":
        return "Townhouse";
      default: return null;
    }
  }

  render() {
    const { details: { area, bedrooms, bathrooms }, id, location, name, type } = this.props;

    return (
      <section className="title__section">
        <h2 className="title__name">{name}</h2>
        <p className="title__location">{location[0]}, {location[1]}</p>
        <ul className="title__details">
          <li className="title__details_type">
            <PropertyIcon 
              size={"m"} 
              type={type} 
              color={"grey"}
            />
            {this.apartOrHouse(type)}
          </li>
          <li>
            <PropertyDetails 
            details={{ area, bedrooms, bathrooms }} 
            mode="list" 
            />
          </li>
          <li className="title__details_id">ID: {id}</li>
        </ul>
      </section>
    )
  }
}





