import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [nfts, setNfts] = useState([]);

  // Dummy data - Replace with actual blockchain data fetching logic
  const fetchNfts = async () => {
    const nftData = [
      { id: 1, title: "Art Piece 1", owner: "user123", price: "10 STX" },
      { id: 2, title: "Art Piece 2", owner: "user456", price: "20 STX" },
    ];
    setNfts(nftData);
  };

  useEffect(() => {
    fetchNfts();
  }, []);

  const handleMint = async () => {
    // Implement NFT minting logic here (Clarinet & Stacks smart contracts)
    alert("Minting NFT (Smart Contract interaction goes here)!");
  };

  return (
    <div className="portfolio">
      <h2>Your Portfolio</h2>
      <div className="nft-gallery">
        {nfts.map((nft) => (
          <div key={nft.id} className="nft-card">
            <img src="https://via.placeholder.com/150" alt={nft.title} />
            <h3>{nft.title}</h3>
            <p>Owner: {nft.owner}</p>
            <p>Price: {nft.price}</p>
            <button onClick={handleMint}>Mint This NFT</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
