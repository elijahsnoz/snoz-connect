import React, { useState, useEffect } from 'react';

const LiveFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    // Simulate live feed updates every 5 seconds
    const interval = setInterval(() => {
      const newFeedItem = {
        time: new Date().toLocaleTimeString(),
        message: "New artwork minted by user123",
      };
      setFeed((prevFeed) => [...prevFeed, newFeedItem]);
    }, 5000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="live-feed">
      <h3>Live Feed</h3>
      {feed.map((item, index) => (
        <div key={index}>
          <p>{item.time} - {item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default LiveFeed;
