import React, { useState, useEffect } from 'react';
import { useConnect } from '@stacks/connect-react';

const ConnectWallet = () => {
  // Destructuring the functions and session from useConnect hook
  const { doOpenAuth, userSession, signOut } = useConnect();
  const [userAddress, setUserAddress] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state to prevent multiple clicks

  useEffect(() => {
    // Check if the user is already connected on initial render
    if (userSession?.isUserSignedIn()) {
      const userData = userSession.loadUserData();
      const address = userData.profile.stxAddress.mainnet;
      setUserAddress(address);
    }
  }, [userSession]);

  // Handle wallet connection
  const handleConnect = async () => {
    setLoading(true); // Set loading state
    try {
      await doOpenAuth(); // Open wallet for authentication
      const userData = userSession.loadUserData(); // Load user data from session
      console.log('User Data:', userData); // Log user data for debugging
      const address = userData.profile.stxAddress.mainnet; // Get Stacks address
      setUserAddress(address); // Update the state with wallet address
    } catch (err) {
      console.error("Wallet connection failed:", err);
      alert('Connection failed! Please try again.');
    } finally {
      setLoading(false); // Reset loading state after the process
    }
  };

  // Handle wallet disconnection
  const handleDisconnect = () => {
    signOut(); // Sign out the user
    setUserAddress(null); // Clear the user address state
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* If not connected, show "Connect Wallet" button */}
      {!userAddress ? (
        <button onClick={handleConnect} style={buttonStyle} disabled={loading}>
          {loading ? 'Connecting...' : 'Connect Wallet'}
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
  opacity: 0.9,
};

export default ConnectWallet;
