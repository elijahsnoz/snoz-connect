import Web3Modal from 'web3modal';
import { Web3Provider } from '@ethersproject/providers'; // Ensure this is installed
import WalletConnectProvider from '@walletconnect/web3-provider'; // Ensure this is installed

let web3Modal;
let provider;
let signer;
let userAddress;

export const initWeb3Modal = () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: 'YOUR_INFURA_PROJECT_ID', // Add your Infura project ID
      },
    },
  };

  web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
  });
};

export const connectWallet = async () => {
  if (!web3Modal) {
    initWeb3Modal();
  }

  const instance = await web3Modal.connect();
  provider = new Web3Provider(instance);
  signer = provider.getSigner();
  userAddress = await signer.getAddress();
  console.log('Connected address:', userAddress);
};

export const disconnectWallet = () => {
  if (web3Modal) {
    web3Modal.clearCachedProvider();
    provider = null;
    signer = null;
    userAddress = null;
    console.log('Disconnected wallet');
  }
};
