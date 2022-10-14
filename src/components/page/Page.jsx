import React, { Component } from 'react'
import {Footer} from '../footer/footer.jsx'
import HeaderMain from '../header/header.jsx'
import "./page.css"

export class Page extends Component {
  
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