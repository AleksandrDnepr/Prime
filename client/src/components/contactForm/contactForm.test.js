import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "./contactForm";
import userEvent from "@testing-library/user-event";

const onChange = jest.fn();

describe("ContactForm component", () => {
  test("display the markup of the component ContactForm", () => {
    render(<ContactForm />);
    screen.debug();
  });

  test("checking element form in component ContactForm", () => {
    render(<ContactForm />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  test("checking element list in component ContactForm", () => {
    render(<ContactForm />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("checking element button in component ContactForm", () => {
    render(<ContactForm />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("onChenge works in component ContactForm", () => {
    render(<ContactForm />);
    userEvent.click;
  });
});
