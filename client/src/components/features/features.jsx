import React, { Component } from "react";
import Feature from "./__feature/__feature.jsx";
import "./features.css";
import {Subtitle} from "../subtitle/subtitle.jsx";

export class Features extends Component {
    
  render() {
    const { features } = this.props;

    return <section className="features">
            <Subtitle>Features</Subtitle>
              <ul className="features__list">
                {Object.keys(features).map(key => <Feature  key={key} name={key} text={features[key]}/>)}
              </ul>
          </section>
  }
}

