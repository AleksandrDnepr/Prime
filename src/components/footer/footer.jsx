import React, { Component } from "react";
import Logo from "../logo/logo";
import "./footer.css";
import ContactInfo from "../contactInfo/contactInfo";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
            <Logo color="red"/>         
          <section className="footer__contact-block contact-block">
            <h3 className="contact-block__title">Contact Info</h3>
            <ul className="contact-block__list">
                <ContactInfo 
                    className={"contact-block__details"}
                    type="adress" 
                    border={true}>
                    24th Street, New York, USA
                </ContactInfo>
                <ContactInfo 
                    className={"contact-block__details"}
                    type="tel" 
                    border={true}>
                    +0 123-456-7890
                </ContactInfo>
                <ContactInfo 
                    className={"contact-block__details"}
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
