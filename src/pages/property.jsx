import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Property extends Component {
  render() {
    return (
      <>
        <Link to="/property">Property</Link>
      </>
    )
  }
}
