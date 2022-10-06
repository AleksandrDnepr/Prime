import React, { Component } from 'react'
import "./pageNav.css"
import { ReactComponent as SearchSvg } from "./search-svgrepo-com.svg"
export default class PageNav extends Component {
  render() {
    return (
      <p className='back-btn'><SearchSvg /> back to search</p>
    )
  }
}
