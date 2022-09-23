import React, { Component } from 'react';
import Logo from '../logo/logo';
import icon_address from './icon-address.svg';
import icon_email from './icon-email.svg';
import icon_phone from './icon-phone.svg';
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
              <li className='contact-info__item'>
                <div className='contact-info__border'><img src={icon_address} alt='icon-address' width="16px"></img></div>
                <div><a href='geo:40.575087,−73,991014' className='contact-info__text'>24th Street, New York, USA</a></div>
              </li>
              <li className='contact-info__item'></li>
                <div className='contact-info__border'><img src={icon_phone} alt='icon-phone' width="16px"></img></div>
                <div><a href='tel:+01234567890' className='contact-info__text'>+0 123-456-7890</a></div>
              <li className='contact-info__item'></li>
                <div className='contact-info__border'><img src={icon_email} alt='icon-email' width="16px"></img></div>
                <div><a href='mailto:info@example.com' className='contact-info__text'>info@example.com</a></div>
            </ul>
        </div>

      </footer>
    )
  }
}

