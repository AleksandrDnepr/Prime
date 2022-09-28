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
        <section>
          <img src={mainPhoto} alt="main-photo" />
          <div className="info">
            <img src={building} alt="building" />
            <h2>For Sale</h2>
            <h1>{price}</h1>
          </div>
        </section>
          <section className='description'>
      <h3>Dream Apartment for Young Family</h3>
      <h5>Pasadena, California</h5>
      <p>Cras lobortis, diam et ultricies imperdiet, urna urna pharetra est, vitae euismod lectus dolor nec...</p>
      <Title />
          </section>
      </a>
    )
  }
}
