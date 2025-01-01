import React from 'react';
import './assets/styles/main.css';
import ConnectWallet from './components/ConnectWallet';
import Portfolio from './components/Portfolio';
import LiveFeed from './components/LiveFeed';
import { Connect } from '@stacks/connect-react';
import { UserSession, AppConfig } from '@stacks/auth';

function App() {
  // Stacks auth options
  const appConfig = new AppConfig(['store_write', 'publish_data']);
  const userSession = new UserSession({ appConfig });

  const authOptions = {
    appDetails: {
      name: 'Snoz Connect - Decentralized Portfolio',
      icon: `${window.location.origin}/favicon.ico`, // Replace with your app's icon URL
    },
    redirectTo: '/',
    userSession,
  };

  return (
    <Connect authOptions={authOptions}>
      <div className="App">
        <h1>Snoz Connect - Decentralized Portfolio</h1>
        <ConnectWallet />
        <Portfolio />
        <LiveFeed />
      </div>
    </Connect>
  );
}

export default App;
