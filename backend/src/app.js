const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
    res.send("Welcome to Snoz Connect Backend!");
});

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/snoz-connect";
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

module.exports = app;
