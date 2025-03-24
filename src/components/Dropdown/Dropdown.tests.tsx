import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('Dropdown is visible', () => {
  const { getByRole } = render(
    <Dropdown options={[{ label: 'Option 1', value: 'option1' }]} />
  );
  expect(getByRole('combobox')).toBeVisible();
});

test('Dropdown handles selection change', () => {
  const handleChange = jest.fn();
  const { getByRole } = render(
    <Dropdown
      options={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ]}
      onChange={handleChange}
    />
  );

  fireEvent.change(getByRole('combobox'), { target: { value: 'option2' } });
  expect(handleChange).toHaveBeenCalledWith('option2');
});

test('Dropdown is disabled', () => {
  const { getByRole } = render(
    <Dropdown options={[{ label: 'Option 1', value: 'option1' }]} disabled />
  );
  expect(getByRole('combobox')).toBeDisabled();
});

export {}; // Ensures this file is treated as a module
