import React from "react";

import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { GoHomeButton } from "./GoHomeButton";

describe("should be..", () => {
  test("should be the text in the dom", () => {
    const { getByText } = render(
      <BrowserRouter>
        <GoHomeButton />
      </BrowserRouter>
    );
    const searhedText = getByText(/back to search/i);
    expect(searhedText).toHaveTextContent("back to search");
  });
});
