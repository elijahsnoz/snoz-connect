const ethers = require('ethers');

// Controller to handle wallet connection
const connectWallet = async (req, res) => {
  try {
    const { account } = req.body; // Frontend should send the wallet account address
    if (!account) {
      return res.status(400).json({ error: 'Account address is required' });
    }

    // Add your wallet verification logic here (e.g., check balance)
    console.log(`Connecting wallet for account: ${account}`);

    res.status(200).json({ message: 'Wallet connected successfully', account });
  } catch (error) {
    console.error('Error connecting wallet:', error);
    res.status(500).json({ error: 'An error occurred while connecting the wallet' });
  }
};

module.exports = { connectWallet };
