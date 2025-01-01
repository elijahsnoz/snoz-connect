import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';  // Adjust the import path

test('renders without crashing', () => {
  render(<App />);
});

test('contains Routes component', () => {
  const { getByTestId } = render(<App />);
  const routesElement = getByTestId('routes');
  expect(routesElement).toBeInTheDocument();
});
