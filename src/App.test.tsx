import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  // Adjust the text matcher to match content in your App
  const headingElement = screen.getByText(/My Component Library/i);
  expect(headingElement).toBeInTheDocument();
});
