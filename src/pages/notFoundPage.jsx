import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/footer'
import HeaderMain from '../components/header/header'
import "./notFoundPage.css"

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="notFoundPage notFoundPage__container">
      <HeaderMain />
      <main className="notFoundPage__main">
        <p className="notFoundPage__text">Page not found</p>
        <Link to="/properties" className="notFoundPage__link">return to the beginning</Link>
      </main>
      <Footer />
      </div>
    )
  }
}
