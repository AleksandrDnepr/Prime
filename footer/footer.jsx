import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer_logo'>
          <img src="./logo.svg" alt="logo"></img>
        </div>
        <div className='footer_contact-info contact-info'>
            <h3 className='contact-info_title'>Contact Info</h3>
            <ul className='contact-info_list'>
              <li className='contact-info_address'>
                <img src='./icon-address' alt='icon-address'></img>
                <p>24th Street, New York, USA</p>
              </li>
              <li className='contact-info_phone'></li>
              <li className='contact-info_email'></li>
            </ul>
        </div>

      </footer>
    )
  }
}
