import React, { useState } from "react";
import { Input } from "../input/input.jsx";
import { Button } from "../button/button.jsx";
import { FormError } from "../formError/formError.jsx";
import "./contactForm.css";

export function ContactForm({onSubmit}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [formIsValid, ]

  const validation = {
    name: {
      isRequired: true,
    },
    email: {
      isRequired: true,
      isEmail: true,
    },
    message: {
      isRequired: true,
    },
  };

  function validateField(fieldName, value) {
    const fieldValidation = validation[fieldName];

    let error;

    if (fieldValidation.isRequired && !value) {
      error = "This field is required";
    } else if (fieldValidation.isEmail) {
      const regexp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

      if (!regexp.test(value)) {
        error = "This field should be a valid email";
      }
    }

    return error;
  }

  function validate() {
    const fields = ["name", "email", "message"];
    const { errors } = this.state;
    let formIsValid = true;

    fields.forEach((fieldName) => {
      const value = this.state[fieldName];
      const error = validateField(fieldName, value);

      if (error) {
        errors[fieldName] = error;
        formIsValid = false;
      } else {
        delete errors[fieldName];
      }
    });

    this.setState({ errors });
    return formIsValid;
  }

  const changeFormParam = (fieldName, value) => {
    this.setState({ [fieldName]: value });
    const error = validateField(fieldName, value);

    if (error) {
      errors[fieldName] = error;
    } else {
      delete errors[fieldName];
    }

    this.setState({ errors });
  };

  function changeMessage(event) {
    changeFormParam("message", event.target.value);
  }

  function handleSubmit() {
    const formIsValid = validate();
    const { name, email, message } = this.state;

    if (formIsValid && onSubmit) {
      onSubmit({ name, email, message });
    }
  }


    return (
      <form className="contact-form">
        <ul className="contact-form__list">
          <li className="contact-form__input">
            <div className="contact-form__field">
              <Input
                required
                type="text"
                size="large"
                value={name}
                name="name"
                placeholder="Your name"
                onChange={changeFormParam}
              />
              <FormError error={errors.name} />
            </div>
            <div className="contact-form__field">
              <Input
                required
                type="text"
                size="large"
                value={email}
                name="email"
                placeholder="Your Email"
                onChange={changeFormParam}
              />
              <FormError error={errors.email} />
            </div>
          </li>
          <li className="contact-form__textarea">
            <textarea
              required
              rows={8}
              type="text"
              value={message}
              name="message"
              placeholder="Message"
              className="textarea__element"
              onChange={(event) => changeMessage(event)}
            />
            <FormError error={errors.message} />
          </li>
          <li className="contact-form__button">
            <Button
              size="l"
              rounding="both"
              clickEvent={(event) => handleSubmit(event)}
              // disabled={!this.state.formValid}
            >
              SEND MESSAGE
            </Button>
          </li>
        </ul>
      </form>
    );
}
