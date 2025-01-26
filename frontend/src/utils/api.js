import axios from 'axios';

// Replace with your actual API base URL
const API_BASE_URL = 'http://localhost:5000/api'; // Change this to the actual backend URL

// Fetch contract data from the backend
export const fetchContractData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/contract-data`);
    return response.data; // Returns the fetched contract data
  } catch (error) {
    console.error('Error fetching contract data:', error); // Logs error to the console
    throw error; // Throws the error to be handled by the calling function
  }
};

// Send transaction data to the backend
export const sendTransaction = async (payload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/transaction`, payload);
    return response.data; // Returns the transaction result
  } catch (error) {
    console.error('Error sending transaction:', error); // Logs error to the console
    throw error; // Throws the error to be handled by the calling function
  }
};
