import React from "react";

import { render } from "@testing-library/react";

import { ViewModeToggle } from "../ViewModeToggle/ViewModeToggle";
import { Component } from "react";

describe("should be..", () => {
  test("should be the text in the dom", () => {
    const { getByText } = render(<ViewModeToggle />);
    const searhedText = getByText(/View mode:/i);
    expect(searhedText).toHaveTextContent("View mode:");
  });

  test("to be in the document", () => {
    const component = render(<ViewModeToggle />);
    let searchedClass = component.container.querySelector(".btn-icon");
    expect(searchedClass).toBeInTheDocument();
  });

  test("not to be undefined", () => {
    const component = render(<ViewModeToggle />);
    let searchedClassUndefined = component.container.querySelector(".btn-icon");
    expect(searchedClassUndefined).not.toBeUndefined();
  });
  test("quantity of the buttons", () => {
    const component = render(<ViewModeToggle />);
    let searchedButtons = component.container.getElementsByTagName("Button");
    expect(searchedButtons.length).toBe(2);
  });
});
