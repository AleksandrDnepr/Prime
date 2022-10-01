import React, { Component } from 'react'
import "./propertyCard.css"
import PropertyDetails from '../propertyDetails/propertyDetails'
import PriceLabel from '../priceLabel/priceLabel'

export default class PropertyCard extends Component {
  render() {
    const { picture, mode, deal, type, link, price, title, location, description, details } = this.props;

    return (
      <a href={link} className={`container_${mode}`}>
        <section className='label__info'>
          <img className="property-photo" src={picture} alt="Property view" />
          <PriceLabel price={price} deal={deal} type={type} />
        </section>
        <section className={`description_${mode}`}>
          <h4 className='description-title'>{title}</h4>
          <h6 className="description-address">{location[0]}, {location[1]}</h6>
          <p className="description-text">{description}</p>
          <PropertyDetails details={details} mode={mode} />
        </section>
      </a>
    )
  }
}
