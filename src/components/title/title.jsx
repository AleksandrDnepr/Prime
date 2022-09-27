import React, { Component } from 'react'
import baths from "./baths.svg"
import beds from "./beds.svg"
import area from "./area.svg"

export default class Title extends Component {
  render() {
    return (
        <section>
        <img src={area} alt="area" /><span>1234</span>
        <img src={beds} alt="beds" /><span>3</span>
        <img src={baths} alt="bathrooms" /><span>1</span>
      </section>
    )
  }
}
