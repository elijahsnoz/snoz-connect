import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WalletConnect from './WalletConnect';
import Web3 from 'web3';
import JobSearch from './JobSearch';
import JobPosting from './components/JobPosting';

const App = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [balance, setBalance] = useState(null);
  const [nfts, setNfts] = useState([]);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (walletConnected) {
      fetchBalance();
      fetchNFTs();
    }
  }, [walletConnected]);

  const handleWalletConnect = async (address) => {
    setUserAddress(address);
    setWalletConnected(true);
  };

  const fetchBalance = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const balance = await web3.eth.getBalance(userAddress);
      setBalance(web3.utils.fromWei(balance, 'ether'));
    }
  };

  const fetchNFTs = async () => {
    try {
      const fetchedNFTs = await fetch(`https://api.example.com/nfts?owner=${userAddress}`);
      const data = await fetchedNFTs.json();
      setNfts(data);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
    }
  };

  const handleRoleSelection = (role) => {
    setUserRole(role);
  };

  return (
    <Router>
      <div>
        <h1>Welcome to the Decentralized Portfolio</h1>
        {!walletConnected && <WalletConnect onConnect={handleWalletConnect} />}

        {walletConnected && (
          <>
            <p>Connected Wallet Address: {userAddress}</p>
            <p>Balance: {balance} ETH</p>
            {!userRole ? (
              <div>
                <button onClick={() => handleRoleSelection('seeker')}>Job Seeker</button>
                <button onClick={() => handleRoleSelection('employer')}>Employer</button>
              </div>
            ) : (
              <>
                <p>You are logged in as: {userRole === 'seeker' ? 'Job Seeker' : 'Employer'}</p>
                {userRole === 'seeker' && <JobSearch />}
                {userRole === 'employer' && <JobPosting />}
              </>
            )}
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
