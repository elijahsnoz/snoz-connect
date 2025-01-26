const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const walletRoutes = require('./routes/wallet'); // Import wallet routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/wallet', walletRoutes); // All routes in walletRoutes will be prefixed with /api/wallet

// Default route
app.get('/', (req, res) => {
  res.send('Backend server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
