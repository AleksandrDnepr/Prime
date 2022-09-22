import React, { Component } from 'react';
import Logo from '../logo/logo';
import "./footer.css";



export default class Footer extends Component {


  render() {
    return (
      <footer className='footer'>
        <div className='footer__logo'>
          <Logo color="#DF434A"/>
        </div>
        <div className='footer__contact-info contact-info'>
            <h3 className='contact-info__title'>Contact Info</h3>
            <ul className='contact-info__list'>
              <li className='contact-info__address'>
                <img src='./icon-address.svg' alt='icon-address'></img>
                <span>24th Street, New York, USA</span>
              </li>
              <li className='contact-info__phone'></li>
                <img src='./icon-phone.svg' alt='icon-address'></img>
                <span>24th Street, New York, USA</span>
              <li className='contact-info__email'></li>
                <img src='./icon-email.svg' alt='icon-address'></img>
                <span>24th Street, New York, USA</span>
            </ul>
        </div>

      </footer>
    )
  }
}
