import React, { Component } from 'react'
import Footer from '../footer/footer'
import HeaderMain from '../header/header'
import "./page.css"

export default class Page extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <div>
        <HeaderMain title={title} />
        <article className='page__content'>{children}</article>
        <Footer />
      </div>
    )
  }
}