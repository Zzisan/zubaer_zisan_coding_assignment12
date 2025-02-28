import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

test('Text is visible', () => {
  const { getByText } = render(<Text>Test Text</Text>);
  expect(getByText('Test Text')).toBeVisible();
});

test('Text applies bold style correctly', () => {
  const { getByText } = render(<Text bold>Bold Text</Text>);
  const text = getByText('Bold Text');
  expect(text).toHaveStyle('font-weight: bold');
});

test('Text applies italic style correctly', () => {
  const { getByText } = render(<Text italic>Italic Text</Text>);
  const text = getByText('Italic Text');
  expect(text).toHaveStyle('font-style: italic');
});

export {}; // Ensures this file is treated as a module
