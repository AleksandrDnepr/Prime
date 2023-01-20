import React from "react";
import { render, screen } from "@testing-library/react";
import Feature from "./__feature";

describe("Feature component", () => {
  test("display the markup of the component Feature", () => {
    render(<Feature name="pool" text="Outdoor pool" />);
    screen.debug();
  });

  test("component have special description in Feature", () => {
    render(<Feature name="pool" text="Outdoor pool" />);
    expect(screen.getAllByText(/pool/i)[0]).toHaveTextContent("pool");
  });

  test("checking poolIcon in component Feature", () => {
    render(<Feature name="pool" text="Outdoor pool" />);
    expect(screen.getByRole("poolIcon")).toBeInTheDocument();
  });
});
