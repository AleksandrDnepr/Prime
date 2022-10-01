import React, { Component } from "react";

export default class Feature extends Component {

    render() {
        const {src, text} = this.props;
        
        return  <li className="feature_container"> 
                <img 
                className="features_img"
                src={src}
                alt = {`${text} icon`} />
                {text}
             </li>    
    }
}      