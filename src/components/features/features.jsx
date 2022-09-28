import React, { Component } from "react";
import paw from "./Paw.svg";
import pool from "./Pool.svg";
import fence from "./Fence.svg";

function container(src, text) {
    <img
    className="icon_img"
    src={src}
    alt="icon_img"
    width="40px" ></img>;
    <p>{text}</p>;
};

export default class Features extends Component {
    constructor(props) {
        super(props);
        this.props = props;
      };
    
  render() {
    return (
        
        <div>
            container({paw}, "Pets Allowed");
            container({pool}, "Outdoor Pool");
            container({fence}, "Outdoor Pool");
        </div>
    )
  }
}