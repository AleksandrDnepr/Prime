import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'


class Index extends Component {
  render() {
    return (
      <>
        <Link to="/component_gallery">Gallery</Link>
      </>
    )
  }
}

export default withRouter(Index)