import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

test('Input field is visible', () => {
  const { getByPlaceholderText } = render(<Input placeholder="Test Input" />);
  expect(getByPlaceholderText('Test Input')).toBeVisible();
});

test('Input field updates value on change', () => {
  const handleChange = jest.fn();
  const { getByPlaceholderText } = render(
    <Input placeholder="Test Input" onChange={handleChange} />
  );

  fireEvent.change(getByPlaceholderText('Test Input'), {
    target: { value: 'Hello' },
  });
  expect(handleChange).toHaveBeenCalledWith('Hello');
});

test('Disabled input field cannot be typed in', () => {
  const { getByPlaceholderText } = render(
    <Input placeholder="Test Input" disabled />
  );

  expect(getByPlaceholderText('Test Input')).toBeDisabled();
});

test('Error message appears when provided', () => {
  const { getByText } = render(
    <Input placeholder="Test Input" error="This field is required" />
  );
  expect(getByText('This field is required')).toBeVisible();
});

export {}; // Ensures this file is treated as a module
