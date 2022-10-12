import React, { Component } from 'react'
import "./redirectButton.css"
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as SearchSvg } from "./search.svg"
class RedirectButton extends Component {
  render() {
    return (
      <Link to={"/"} className="link-property"><p className='back-btn'><SearchSvg /> back to search</p></Link>
    )
  }
}

export default withRouter(RedirectButton);