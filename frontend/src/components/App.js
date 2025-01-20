// /src/components/App.js
import React, { useEffect, useState } from 'react';
import { initWeb3Modal, connectWallet, disconnectWallet } from '../utils/connectWallet';

const App = () => {
  const [userAddress, setUserAddress] = useState(null);

  useEffect(() => {
    initWeb3Modal(); // Initialize Web3Modal when the app loads
  }, []);

  const handleConnect = async () => {
    await connectWallet();
    setUserAddress(userAddress);
    getBalance(); // Optionally, you can call this to check the wallet's balance after connecting
  };

  const handleDisconnect = () => {
    disconnectWallet();
    setUserAddress(null);
  };

  return (
    <div>
      <h1>Snoz Connect</h1>
      {userAddress ? (
        <div>
          <p>Connected to: {userAddress}</p>
          <button onClick={handleDisconnect}>Disconnect</button>
        </div>
      ) : (
        <button onClick={handleConnect}>Connect Wallet</button>
      )}
    </div>
  );
};

export default App;
