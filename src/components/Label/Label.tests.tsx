import React from "react";
import { render } from "@testing-library/react";
import Label from "./Label";

test("Label is visible", () => {
  const { getByText } = render(<Label>Test Label</Label>);
  expect(getByText("Test Label")).toBeVisible();
});

test("Label has correct disabled style", () => {
  const { getByText } = render(<Label disabled>Disabled Label</Label>);
  const label = getByText("Disabled Label");
  expect(label).toHaveStyle("color: #aaa");
});

export {}; // Ensures this file is treated as a module
