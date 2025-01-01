const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  creator: { type: String, required: true }, // Stacks address
  transactionId: { type: String },
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
