import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from './HeroImage';

test('Hero Image is visible', () => {
  const { getByText } = render(
    <HeroImage src="https://via.placeholder.com/1200x400" title="Test Hero" />
  );
  expect(getByText('Test Hero')).toBeVisible();
});

test('Hero Image applies overlay when enabled', () => {
  const { container } = render(
    <HeroImage src="https://via.placeholder.com/1200x400" title="Overlay Test" overlay />
  );
  expect(container.firstChild).toHaveStyle('position: relative');
});

test('Hero Image aligns text correctly', () => {
  const { getByText } = render(
    <HeroImage src="https://via.placeholder.com/1200x400" title="Left Aligned" align="left" />
  );
  const textContainer = getByText('Left Aligned').parentElement;
  expect(textContainer).toHaveStyle('text-align: left');
});

export {}; // Ensures this file is treated as a module
