import React, { Component } from "react";
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
              alt="${text}' icon" />
              {text}
           </li>
    };
    
  render() {
    return (

      <ul className="features_main_container">
        {this.container(paw, "Pets Allowed")}
        {this.container(pool, "Outdoor Pool")}
        {this.container(fence, "850 Sq Ft Garden")}
      </ul>
    )
  }
}