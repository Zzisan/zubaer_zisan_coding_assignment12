import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';

test('Image is visible', () => {
  const { getByAltText } = render(
    <Image src="https://via.placeholder.com/300" alt="Test Image" />
  );
  expect(getByAltText('Test Image')).toBeVisible();
});

test('Image applies rounded styling', () => {
  const { getByAltText } = render(
    <Image src="https://via.placeholder.com/300" alt="Test Image" rounded />
  );
  const img = getByAltText('Test Image');
  expect(img).toHaveStyle('border-radius: 10px');
});

test('Image applies border styling', () => {
  const { getByAltText } = render(
    <Image src="https://via.placeholder.com/300" alt="Test Image" bordered />
  );
  const img = getByAltText('Test Image');
  expect(img).toHaveStyle('border: 2px solid #ccc');
});

export {}; // Ensures this file is treated as a module
