import React, { Component } from "react";
import "./propertyCard.css";
import PropertyDetails from "../propertyDetails/propertyDetails";
import PriceLabel from "../priceLabel/priceLabel";
import { Link } from "react-router-dom";

export default class PropertyCard extends Component {
  render() {
    const {
      id,
      picture,
      mode,
      deal,
      type,
      price,
      title,
      location,
      description,
      details,
    } = this.props;

    return (
      <Link to={`/${id}`} className={`container_${mode}`}>
        <section className="label__info">
          <img className="property-photo" src={picture} alt="Property view" />
          <PriceLabel price={price} deal={deal} type={type} />
        </section>
        <section className={`description_${mode}`}>
          <h4 className="description-title">{title}</h4>
          <h6 className="description-address">
            {location[0]}, {location[1]}
          </h6>
          <p className="description-text">
            {" "}
            {description.length < 215
              ? `${description}`
              : `${description.substring(0, 215)}...`}
          </p>
          <PropertyDetails details={details} mode={mode} />
        </section>
      </Link>
    );
  }
}
