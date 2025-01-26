import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WalletConnect from './WalletConnect';
import Web3 from 'web3';
import OpenSea from 'opensea-js';  // Import OpenSea API

const App = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [balance, setBalance] = useState(null);
  const [nfts, setNfts] = useState([]);
  const [userRole, setUserRole] = useState(null);

  const OPENSEA_API_KEY = 'd13a286938a9454f9159e856d53a2ed7';  // Your OpenSea API key

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
      const seaport = new OpenSea.OpenSeaPort(window.ethereum, {
        networkName: OpenSea.Network.Main,
        apiKey: OPENSEA_API_KEY,  // Set your API key for OpenSea
      });

      const ownerAssets = await seaport.api.getAssets({
        owner: userAddress,
      });

      setNfts(ownerAssets.assets);
    } catch (error) {
      console.error('Error fetching NFTs from OpenSea:', error);
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
                <div>
                  <h2>Your NFTs:</h2>
                  <ul>
                    {nfts.map((nft) => (
                      <li key={nft.tokenId}>
                        <img src={nft.imageUrl} alt={nft.name} width="100" />
                        <p>{nft.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
