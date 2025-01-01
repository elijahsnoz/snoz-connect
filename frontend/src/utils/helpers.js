// Helper Functions for General Utilities

/**
 * Format a date to a more readable format (e.g., "Jan 1, 2024").
 * @param {string | Date} date - The date to format.
 * @returns {string} Formatted date string.
 */
export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  
  /**
   * Capitalize the first letter of a string.
   * @param {string} str - The string to capitalize.
   * @returns {string} Capitalized string.
   */
  export const capitalize = (str) => {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /**
   * Truncate a string to a specified length, adding "..." if truncated.
   * @param {string} str - The string to truncate.
   * @param {number} length - The maximum length of the string.
   * @returns {string} Truncated string.
   */
  export const truncate = (str, length = 100) => {
    if (!str || typeof str !== 'string') return '';
    return str.length > length ? `${str.slice(0, length)}...` : str;
  };
  
  /**
   * Validate if an email is in a correct format.
   * @param {string} email - The email to validate.
   * @returns {boolean} True if valid, false otherwise.
   */
  export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Check if an object is empty.
   * @param {object} obj - The object to check.
   * @returns {boolean} True if the object is empty, false otherwise.
   */
  export const isEmptyObject = (obj) => {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
  };
  
  /**
   * Sleep function for async operations.
   * @param {number} ms - The duration to wait in milliseconds.
   * @returns {Promise} A promise that resolves after the given duration.
   */
  export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  