import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WalletConnect from '../components/WalletConnect';  // Adjust the import path

test('renders wallet connect button', () => {
  const { getByText } = render(<WalletConnect />);
  const connectButton = getByText(/Connect Wallet/i);
  expect(connectButton).toBeInTheDocument();
});

test('clicking connect button triggers a function', () => {
  const mockConnect = jest.fn();  // Mock function
  const { getByText } = render(<WalletConnect connectWallet={mockConnect} />);
  const connectButton = getByText(/Connect Wallet/i);

  fireEvent.click(connectButton);
  expect(mockConnect).toHaveBeenCalledTimes(1);
});
