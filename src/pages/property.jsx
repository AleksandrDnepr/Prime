import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Property extends Component {
  render() {
    return (
      <>
        <Link to="/property">Property</Link>
      </>
    )
  }
}

export default withRouter(Property)