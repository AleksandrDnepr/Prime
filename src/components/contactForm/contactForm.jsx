import React, { Component } from 'react';

import { Input } from "../input/input.jsx";

import { Button } from "../button/button.jsx";

import "./contactForm.css";


export class ContactForm extends Component {

state = {
  name: "",
  email: "",
  message: ""
}

changeFormParam(name, value) {
  this.setState({ [name]: value });
}

handleSubmit = (event) => {
  console.log("email was changed", event.target.value);
  this.setState({name: event.target.value, email: event.target.value})
}

  render() {
const { name, email, message } = this.state;

    return (
      <form className="contact-form">
        <ul className="contact-form__list">
          <li className="contact-form__input">
            <Input
              type="text"
              size="small"
              value={name}
              name="yourName"
              placeholder="Your name"
              onChange={(name, value) => this.changeFormParam(name, value)}
            />
          </li>
          <li className="contact-form__input">  
            <Input
              type="text"
              size="small"
              value={email}
              name="yourEmail"
              placeholder="Your Email"
              onChange={(email, value) => this.changeFormParam(email, value)} 
            />
          </li>
          <li className="contact-form__textarea">  
            <textarea 
              type="text"
              value={message}
              name="message"
              placeholder="Message"
              onChange={(message, value) => this.changeFormParam(message, value)} />
          </li>
          <li className="contact-form__button">
            <Button size="l" rounding="both" clickEvent={this.handleSubmit}>
                SEND MESSAGE
            </Button>
          </li>
        </ul>
      </form>
    )
  }
}
