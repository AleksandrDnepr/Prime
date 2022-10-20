import React, { Component } from 'react';

import { Input } from "../input/input.jsx";

import { Button } from "../button/button.jsx";

import "./contactForm.css";


export class ContactForm extends Component {
  render() {
    return (
      <form className="contact-form">
        <ul className="contact-form__list">
          <li className="contact-form__inputs">
            <Input
              type="text"
              size="large"
              value=""
              name="yourEmail"
              placeholder="Your Email"
              onChange={(name, value) => this.changeFormParam(name, value)}
            />
            <Input
              type="text"
              size="large"
              value=""
              name="maxArea"
              placeholder="Your name"
              onChange={(name, value) => this.changeFormParam(name, value)}
            />
          </li>
          <li>  
            <textarea>

            </textarea>
          </li>
        </ul>
        <Button size="l" rounding="both" clickEvent={this.handleSubmit}>
                SEND MESSAGE
        </Button>
      </form>
    )
  }
}
