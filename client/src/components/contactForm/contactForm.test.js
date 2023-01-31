import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "./contactForm";

describe("ContactForm component", () => {
  test("display the markup of the component ContactForm", () => {
    render(<ContactForm />);
    screen.debug();
  });

  const checkInput = (role, value) => {
    const inputName = screen.getByRole(role);

    fireEvent.change(inputName, { target: { value } });
    fireEvent.blur(inputName);
    expect(inputName).toBeInTheDocument();
    expect(inputName).toHaveValue(value);
  };

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

  test("checking submit form in component ContactForm", () => {
    const onSubmit = jest.fn(console.log);
    render(<ContactForm onSubmit={onSubmit} />);
    const buttonSubmit = screen.getByRole("button");
    const formData = { email: "dsv@sfdgh.sf", message: "Hello", name: "Bob" };

    checkInput("inputName", formData.name);
    checkInput("inputEmail", formData.email);
    checkInput("textbox", formData.message);

    fireEvent.click(buttonSubmit);
    expect(onSubmit.mock.lastCall[0].name).toBe(formData.name);
    expect(onSubmit.mock.lastCall[0].email).toBe(formData.email);
    expect(onSubmit.mock.lastCall[0].message).toBe(formData.message);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
