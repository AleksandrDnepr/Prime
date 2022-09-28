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
    return <li className="features_container"> 
            <ul>
                <img 
                className="features_img"
                src={src}
                alt="icon_img"
                width="40px" >
                </img>
            </ul>
            <ul>
                <p className="features_text">
                    {text}
                </p>
            </ul>
        </li>
    };
    
  render() {
    return (

        <div className="features_main_container">
           {this.container(paw, "Pets Allowed")}
           {this.container(pool, "Outdoor Pool")}
           {this.container(fence, "850 Sq Ft Garden")}
        </div>
    )
  }
}