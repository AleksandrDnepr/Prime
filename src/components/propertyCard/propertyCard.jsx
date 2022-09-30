import React, { Component } from 'react'
import mainPhoto from "./Photo.png"
import building from "./Apartment.svg"
import "./propertyCard.css"
import PropertyDetails from '../propertyDetails/propertyDetails'

export default class PropertyCard extends Component {
  render() {
    const { mode, picture, deal, type, price, title, location, description, details } = this.props;
    return (
      <a className="container">
        <section className='label__info'>
          <img src={mainPhoto} alt="main-photo" />
          <div className="price__label-block">
            <img src={building} alt="building" />
            <p>{deal}</p>
            <p>{price}</p>
          </div>
        </section>
        <section className='description'>
          <h4 className='description-title'>{title}</h4>
          <h6 className="description-address">{location[0]}, {location[1]}</h6>
          <p className="description-text">{description}</p>
          <PropertyDetails details={details} />
        </section>
      </a>
    )
  }
}
