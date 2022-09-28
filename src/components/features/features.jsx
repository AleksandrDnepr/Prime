import React, { Component } from "react";
import "./features.css"
import paw from "./Paw.svg";
import pool from "./Pool.svg";
import fence from "./Fence.svg";

export default class Features extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    };

    container(src, text) {
    return <li className="feature_container"> 
          
                <img 
                className="features_img"
                src={src}
                alt="{text} icon"
                width="40px" >
                </img>
                    {text}
        </li>
    };
    
  render() {
    return (

        <section className="features_main_container">
            <p className='features_title'>{this.props.title}</p>
            <ul  className="features_container">
          {this.container(paw, "Pets Allowed")}
           {this.container(pool, "Outdoor Pool")}
           {this.container(fence, "850 Sq Ft Garden")}
           </ul>
        </section>
    )
  }
}