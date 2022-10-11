import React, { Component } from "react";
import PropertyDetails from "../propertyDetails/propertyDetails";
import PriceLabel from "../priceLabel/priceLabel";
import { Link } from "react-router-dom";
import "./propertyCard.css";

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
      <Link to={`/${id}`} className={`property property_${mode}`}>
        <section className="property__banner">
          <img className="property__banner_photo" src={picture} alt="Property view" />
          <PriceLabel price={price} deal={deal} type={type} />
        </section>
        <section className={`property__dscrpt property__dscrpt_${mode}`}>
          <h3 className="property__dscrpt_title">{title}</h3>
          <h4 className="property__dscrpt_address">
            {location[0]}, {location[1]}
          </h4>
          <p className="property__dscrpt_text">
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
