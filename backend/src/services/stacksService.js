const { makeContractCall } = require('@stacks/transactions');
const stacksNetwork = require('../config/stacks');

exports.uploadWork = async ({ title, description, imageUrl, creator }) => {
  const txOptions = {
    contractAddress: process.env.CONTRACT_ADDRESS,
    contractName: 'portfolio-contract',
    functionName: 'add-work',
    functionArgs: [
      { type: 'string', value: title },
      { type: 'string', value: description },
      { type: 'string', value: imageUrl },
    ],
    senderKey: process.env.SENDER_KEY,
    network: stacksNetwork,
  };

  const tx = await makeContractCall(txOptions);
  return tx.txid; // Transaction ID
};
