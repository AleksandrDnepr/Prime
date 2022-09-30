import React, { Component } from 'react'
import mainPhoto from "./Photo.png"
import "./propertyCard.css"
import PropertyDetails from '../propertyDetails/propertyDetails'
import { ReactComponent as ApartmentSvg } from "./Apartment.svg"
import { ReactComponent as TownHouseSvg } from "./townhouse.svg"

export default class PropertyCard extends Component {
  render() {
    const { mode, deal, type, price, title, location, description, details } = this.props;
    return (
      <a href="qwert" className={`container_${mode}`}>
        <section className='label__info'>
          <img src={mainPhoto} alt="Property view" />
          <div className="price__label-block">
          {type==="apartment"?<ApartmentSvg className='type-building-icon'/>:<TownHouseSvg className='type-building-icon'/>}
            <p className='type-building'>{deal}</p>
            <p className='price'>{price}</p>
          </div>
        </section>
        <section className={`description_${mode}`}>
          <h4 className='description-title'>{title}</h4>
          <h6 className="description-address">{location[0]}, {location[1]}</h6>
          <p className="description-text">{description}</p>
          <PropertyDetails details={details}/>
        </section>
      </a>
    )
  }
}
