import React, { Component } from 'react'
import mainPhoto from "./Photo.png"
import building from "./Apartment.svg"
import "./propertyCard.css"
import Title from '../title/title'

export default class PropertyCard extends Component {
    render() {
    const {mode,picture,deal,type,price,title,location,description,details} = this.props;
    return (
      <a className="container">
        <section className='label__info'>
          <img src={mainPhoto} alt="main-photo" />
          <div className="price__label-block">
            <img src={building} alt="building" />
            <p>For Sale</p>
            <p>{price}</p>
          </div>
        </section>
          <section className='description'>
       <h4 className='description-title'>Dream Apartment for Young Family</h4>
        <h6 className="description-address">Pasadena, California</h6>
       <p className="description-text">Cras lobortis, diam et ultricies imperdiet, urna urna pharetra est, vitae euismod lectus dolor nec...</p>
       <Title />
          </section>
      </a>
    )
  }
}
