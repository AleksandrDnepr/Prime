import React, { Component } from 'react'
import "./backButton.css"
import { ReactComponent as SearchSvg } from "./search.svg"
export default class BackButton extends Component {
  render() {
    return (
      <p className='back-btn'><SearchSvg /> back to search</p>
    )
  }
}
