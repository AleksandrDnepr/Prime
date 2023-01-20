import React from "react";
import { render, screen } from "@testing-library/react";
import { AgentCard } from "./agentCard";

describe("AgentCard component", () => {
  test("display the markup of the component AgentCard", () => {
    render(<AgentCard />);
    screen.debug();
  });
});
