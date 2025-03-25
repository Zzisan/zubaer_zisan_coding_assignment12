import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';

test('Card renders correctly', () => {
  const { getByText } = render(
    <Card title="Test Card" description="This is a test card." />
  );
  expect(getByText('Test Card')).toBeVisible();
});

test('Card button works when clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Card
      title="Test Card"
      description="Test Description"
      buttonText="Click Me"
      onButtonClick={handleClick}
    />
  );

  fireEvent.click(getByText('Click Me'));
  expect(handleClick).toHaveBeenCalled();
});

test('Card renders without an image', () => {
  const { queryByRole } = render(
    <Card title="No Image Card" description="This card has no image." />
  );
  expect(queryByRole('img')).toBeNull();
});

export {}; // Ensures this file is treated as a module
