// src/WalletConnect.js

import React, { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { Web3Provider } from "@ethersproject/providers";
import Web3 from "web3";

const WalletConnect = ({ onConnect }) => {
  const [provider, setProvider] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    if (provider) {
      const web3 = new Web3(provider);
      const getAddress = async () => {
        try {
          const accounts = await web3.eth.getAccounts();
          if (accounts.length > 0) {
            const address = accounts[0];
            setUserAddress(address);
            onConnect(address);
          }
        } catch (error) {
          console.error("Error getting accounts: ", error);
        }
      };
      getAddress();
    }
  }, [provider, onConnect]);

  const connectWallet = async () => {
    setIsConnecting(true);

    const modal = new Web3Modal({
      cacheProvider: true,
      providerOptions: {
        injected: {
          display: {
            name: "MetaMask",
            description: "Connect with the MetaMask browser extension",
          },
          package: null,
        },
        walletconnect: {
          display: {
            name: "WalletConnect",
            description: "Scan with WalletConnect",
          },
          package: require("@walletconnect/web3-provider"),
          options: {
            infuraId: "your-infura-id", // Replace with your Infura project ID
          },
        },
      },
    });

    const connection = await modal.connect();
    const web3 = new Web3(connection);
    setProvider(connection);

    const accounts = await web3.eth.getAccounts();
    if (accounts.length > 0) {
      const address = accounts[0];
      setUserAddress(address);
      onConnect(address);
    }

    setIsConnecting(false);
  };

  return (
    <div>
      {isConnecting ? (
        <p>Connecting wallet...</p>
      ) : (
        <button onClick={connectWallet}>
          Connect Wallet
        </button>
      )}

      {userAddress && <p>Connected: {userAddress}</p>}
    </div>
  );
};

export default WalletConnect;
