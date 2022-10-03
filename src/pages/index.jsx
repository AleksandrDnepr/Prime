import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Index extends Component {
  render() {
    return (
      <>
        <Link to="/property">Property</Link>
        <Link to="/component_gallery">Gallery</Link>
      </>
    )
  }
}
