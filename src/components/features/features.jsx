import React, { Component } from "react";
import Feature from "../feature/feature";
import "./features.css";
import Subtitle from "../subtitle/subtitle";

export default class Features extends Component {
    
  render() {
    return (
      <section className="features">
        <Subtitle>Features</Subtitle>
        <ul className="features_main_container">
           <Feature icon ="paw">Pets Allowed</Feature>
           <Feature icon ="pool">Outdoor Pool</Feature>
           <Feature icon ="fence">850 Sq Ft Garden</Feature>
        </ul>
      </section>
    )
  }
}