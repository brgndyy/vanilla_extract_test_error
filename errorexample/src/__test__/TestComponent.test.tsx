import React from "react";
import { render, screen } from "@testing-library/react";
import TestComponent from "@/components/TestComponent";
import { testContainer } from "@/components/testComponent.css";

describe("Example Component Test", () => {
  test("check className is right", () => {
    render(<TestComponent />);
    const exampleElement = screen.getByText("TestComponent");

    expect(exampleElement).toHaveClass(testContainer);
  });
});
