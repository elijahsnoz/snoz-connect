// script.js
import { getLiveFeed } from './services/api';

document.addEventListener('DOMContentLoaded', async () => {
  // Get live feed data when the page is loaded
  const feedData = await getLiveFeed();
  const feedContainer = document.getElementById('feed-data');
  
  // Display fetched data in the feed
  if (feedData.length === 0) {
    feedContainer.innerHTML = 'No updates available.';
  } else {
    feedContainer.innerHTML = feedData
      .map(item => `<div class="feed-item">${item.message}</div>`)
      .join('');
  }
});
