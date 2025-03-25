import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("Button is visible", () => {
  const { getByText } = render(<Button>Test Button</Button>);
  expect(getByText("Test Button")).toBeVisible();
});

test("Button has disabled style when disabled", () => {
  const { getByText } = render(<Button disabled>Disabled Button</Button>);
  const button = getByText("Disabled Button");
  expect(button).toHaveStyle("background-color: #ccc");
});

export {};
