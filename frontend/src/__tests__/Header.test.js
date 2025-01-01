import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';  // Adjust the import path

test('renders header with title', () => {
  const { getByText } = render(<Header />);
  const title = getByText(/Smart Contract Interaction/i);
  expect(title).toBeInTheDocument();
});

test('contains logo image', () => {
  const { getByAltText } = render(<Header />);
  const logo = getByAltText(/logo/i);  // Assuming your header has an img with alt="logo"
  expect(logo).toBeInTheDocument();
});
