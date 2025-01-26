const express = require('express');
const { connectWallet } = require('../controllers/walletController'); // Import the controller

const router = express.Router();

// POST route for connecting the wallet
router.post('/connect', connectWallet);

module.exports = router;
