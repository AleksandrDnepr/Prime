import React from "react";
import { render, screen } from "@testing-library/react";
import { ContactForm } from "./contactForm";

describe("ContactForm component", () => {
  test("display the markup of the component ContactForm", () => {
    render(<ContactForm />);
    screen.debug();
  });
});
