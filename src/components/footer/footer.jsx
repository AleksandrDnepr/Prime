import React, { Component } from "react";
import Logo from "../logo/logo";
// import icon_address from "./icon-address.svg";
// import icon_email from "./icon-email.svg";
// import icon_phone from "./icon-phone.svg";
import "./footer.css";

import ContactInfo from "../contactInfo/contactInfo";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
            <Logo color="red"/>         
          <section className="footer__contact-info contact-info">
            <h3 className="contact-info__title">Contact Info</h3>
            <ul className="contact-info__list">
              {/* <li className="contact-info__text">
                <a
                  href="https://goo.gl/maps/vc3YA9dvdSV9W8bW6"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info__item"
                >
                  <img
                    className="contact-info__icon"
                    src={icon_address}
                    alt="icon-address"
                    width="16px"
                  ></img>
                  <span>24th Street, New York, USA</span>
                </a>
              </li>
              <li className="contact-info__text">
                <a href="tel:+01234567890" className="contact-info__item">
                  <img
                    className="contact-info__icon"
                    src={icon_phone}
                    alt="icon-phone"
                    width="16px"
                  ></img>

                  <span>+0 123-456-7890</span>
                </a>
              </li>
              <li className="contact-info__text">
                <a
                  href="mailto:info@example.com"
                  className="contact-info__item"
                >
                  <img
                    className="contact-info__icon"
                    src={icon_email}
                    alt="icon-email"
                    width="16px"
                  ></img>

                  <span>info@example.com</span>
                </a>
              </li> */}
                <ContactInfo 
                    className="footer__contact-info"
                    type="adress" 
                    border={true}>
                    24th Street, New York, USA
                </ContactInfo>
                <ContactInfo 
                    className="footer__contact-info"
                    type="tel" 
                    border={true}>
                    +0 123-456-7890
                </ContactInfo>
                <ContactInfo 
                    type="mail" 
                    border={true}>
                    info@example.com
                </ContactInfo>


            </ul>
          </section>
        </div>
      </footer>
    );
  }
}
