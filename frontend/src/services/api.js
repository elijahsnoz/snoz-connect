// services/api.js

// Simulating a mock live feed API
export const getLiveFeed = async () => {
    try {
      // Simulating fetching live feed data
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            data: [
              { id: 1, message: 'New asset added to your portfolio!' },
              { id: 2, message: 'Transaction completed successfully.' },
              { id: 3, message: 'New offer on your digital asset!' },
            ],
          });
        }, 1000)
      );
      
      return response.data;
    } catch (error) {
      console.error('Error fetching live feed:', error);
      return [];
    }
  };
  