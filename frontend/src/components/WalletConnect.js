// WalletConnect.js
import React, { useState } from 'react';

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Wallet connection failed:', error);
      }
    } else {
      alert('Please install a Web3 wallet like MetaMask!');
    }
  };

  return (
    <div className="text-center my-4">
      <button className="btn btn-primary" onClick={connectWallet}>
        {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...` : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default WalletConnect;
