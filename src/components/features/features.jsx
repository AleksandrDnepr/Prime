import React, { Component } from "react";
import Feature from "../Feature/feature";
import "./features.css"
import paw from "./Paw.svg";
import pool from "./Pool.svg";
import fence from "./Fence.svg";

export default class Features extends Component {

  container(src, text) {
    return <li className="feature_container"> 
              <img 
              className="features_img"
              src={src}
              alt = {`${text} icon`} />
              {text}
           </li>
    };
    
  render() {
    return (
      <section className="features">
        <ul className="features_main_container">
          <Feature src={paw} text="Pets Allowed" />
          <Feature src={pool} text="Outdoor Pool" />
          <Feature src={fence} text="850 Sq Ft Garden" />
        </ul>
      </section>
    )
  }
}