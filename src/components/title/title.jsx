import React, { Component } from 'react';
import "./title.css";
import { ReactComponent as TownhouseSvg } from "./townhouse.svg"
export default class Title extends Component {


  render() {
   const { area, bathrooms, bedroom, id, location, name, type } = this.props; 
    console.log(this.props);

    return (
      <section className="title title__section">
        <h1 className="title__name">{name}</h1>
        <p className="title__location">{location[0] + ", " + location[1]}</p>
        <ul className="title__details details">
            <li className="details__type-card"><TownhouseSvg className="details-list-item"/>{type[0]}</li>
            <li>details</li>
            <li className="details__id-card">ID: {id}</li>
        </ul>
      </section>
    )
  }
}



