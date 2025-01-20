import { Web3Provider } from '@ethersproject/providers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider'; // Import WalletConnect provider
import { initWeb3Modal, connectWallet, disconnectWallet } from '../utils/connectWallet';

let web3Modal;
let provider;
let signer;
let userAddress;

export const initWeb3Modal = () => {
  // Create a Web3Modal instance
  web3Modal = new Web3Modal({
    cacheProvider: true, // Store the last selected provider
    providerOptions: {
      // Available wallet options (MetaMask, WalletConnect, etc.)
      injected: {
        display: {
          name: 'MetaMask',
          description: 'Connect with MetaMask'
        },
        package: null // Use the injected provider (MetaMask)
      },
      walletconnect: {
        display: {
          name: 'WalletConnect',
          description: 'Connect with WalletConnect'
        },
        package: WalletConnectProvider, // This is where WalletConnectProvider is used
        options: {
          rpc: {
            1: 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY',
            4: 'https://rinkeby.infura.io/v3/YOUR_INFURA_KEY'
          }
        }
      }
    }
  });
};

// Function to connect wallet
export const connectWallet = async () => {
  // Open the Web3Modal and select a provider
  const instance = await web3Modal.connect();
  provider = new Web3Provider(instance);

  // Get the signer (user’s wallet)
  signer = provider.getSigner();
  userAddress = await signer.getAddress();

  console.log('Connected address:', userAddress);
};

// Function to disconnect wallet
export const disconnectWallet = () => {
  web3Modal.clearCachedProvider();
  provider = null;
  signer = null;
  userAddress = null;
  console.log('Disconnected wallet');
};