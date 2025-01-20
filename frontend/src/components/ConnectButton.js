// src/components/ConnectButton.js

import React, { useState } from 'react';
import { ethers } from 'ethers';

const ConnectButton = () => {
  const [account, setAccount] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Request access to the user's MetaMask wallet
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]); // Set the first account as the connected account
        console.log("Connected account:", accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={connectMetaMask}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#f6851b",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect MetaMask"}
      </button>
    </div>
  );
};

export default ConnectButton;

