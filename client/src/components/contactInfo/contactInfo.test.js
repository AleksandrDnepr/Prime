import React from "react";
import { render, screen } from "@testing-library/react";
import { ContactInfo } from "./contactInfo";

test("display the markup of the component", () => {
  render(<ContactInfo />);
  screen.debug();
});

test("find elements in component", () => {
  render(<ContactInfo />);
  expect(screen.queryByRole("span"));
});

test("check class", () => {
  const component = render(<ContactInfo />);
  component.container.getElementsByClassName("contact-info");
});
