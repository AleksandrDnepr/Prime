import React, { Component } from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import "./page.css"
import data from "../../data.json"
import { withRouter } from "react-router-dom";

class Page extends Component {
  getFlatByID(id, flats){
    return flats.find((item) => {
      return item.id === id;
    });
  }
  render() {
    const {apartaments} = data;
    const { property_id } = this.props.match.params;
    const flat = this.getFlatByID(property_id, apartaments);
    const {children}=this.props;
    
    return (
      <div>
      {(flat.title)?<Header title={flat.title}/>:<Header title="mdm"/>}
        {/* <Header title={flat.title}/> */}
        <div className='page__content'>
        {children} 
        </div>
        <Footer/>
      </div>
    )
  }
}

export default withRouter(Page);