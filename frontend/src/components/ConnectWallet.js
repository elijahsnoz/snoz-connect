import React, { useState } from 'react';
import { useConnect } from '@stacks/connect-react'; // Ensure this package is installed

const ConnectWallet = () => {
  // Destructuring functions and session object from `useConnect`
  const { doOpenAuth, userSession, signOut } = useConnect();
  const [userAddress, setUserAddress] = useState(null);

  // Handle wallet connection
  const handleConnect = async () => {
    try {
      await doOpenAuth(); // Opens the wallet for authentication
      const userData = userSession.loadUserData(); // Load user data from the session
      const address = userData.profile.stxAddress.mainnet; // Mainnet Stacks address
      setUserAddress(address); // Update state with the wallet address
    } catch (err) {
      console.error("Wallet connection failed:", err);
    }
  };

  // Handle wallet disconnection
  const handleDisconnect = () => {
    signOut(); // Ends the session
    setUserAddress(null); // Clear the address
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* If user is not connected, show Connect button */}
      {!userAddress ? (
        <button onClick={handleConnect} style={buttonStyle}>
          Connect Wallet
        </button>
      ) : (
        <div>
          <p style={{ fontSize: '1.2rem' }}>Connected as: {userAddress}</p>
          <button onClick={handleDisconnect} style={buttonStyle}>
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

// Simple button styling for better appearance
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  color: '#fff',
  backgroundColor: '#4CAF50',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ConnectWallet;
