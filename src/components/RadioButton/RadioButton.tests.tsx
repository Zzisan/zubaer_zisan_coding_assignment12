import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RadioButton from "./RadioButton";

test("Radio Button is visible", () => {
  const { getByLabelText } = render(
    <RadioButton label="Test Radio" name="testGroup" />,
  );
  expect(getByLabelText("Test Radio")).toBeVisible();
});

test("Radio Button changes checked state on click", () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(
    <RadioButton label="Test Radio" name="testGroup" onChange={handleChange} />,
  );

  fireEvent.click(getByLabelText("Test Radio"));
  expect(handleChange).toHaveBeenCalledWith(true);
});

test("Disabled Radio Button does not trigger change", () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(
    <RadioButton
      label="Test Radio"
      name="testGroup"
      disabled
      onChange={handleChange}
    />,
  );

  fireEvent.click(getByLabelText("Test Radio"));
  expect(handleChange).not.toHaveBeenCalled();
});

export {}; // Ensures this file is treated as a module
