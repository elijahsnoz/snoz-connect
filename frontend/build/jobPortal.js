// jobPortal.js

// Sample job data
let jobs = [
    {
        title: 'Web Developer',
        company: 'Snoz Connect',
        description: 'Develop web applications with modern technologies.'
    },
    {
        title: 'Graphic Designer',
        company: 'Nike',
        description: 'Create visually stunning graphics for digital and print media.'
    },
    {
        title: 'Product Manager',
        company: 'Apple',
        description: 'Lead the development of innovative new products.'
    }
];

// Function to display job listings
function displayJobs() {
    const jobListings = document.querySelector('#job-listings');
    jobListings.innerHTML = '';  // Clear existing listings

    jobs.forEach((job, index) => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('bg-gray-800', 'p-4', 'rounded-lg', 'hover:shadow-xl', 'transition-shadow', 'duration-300');
        jobCard.innerHTML = `
            <h4 class="text-xl font-semibold text-white">${job.title}</h4>
            <p class="text-sm text-gray-400">${job.company}</p>
            <p class="text-sm text-gray-300 mt-2">${job.description}</p>
            <button class="bg-primary text-white px-4 py-2 rounded-lg mt-4 transition-colors hover:bg-primary-dark">Apply</button>
        `;
        jobListings.appendChild(jobCard);
    });
}

// Function to add a new job posting
function addJob(job) {
    jobs.push(job);
    displayJobs();  // Refresh job listings after adding a new one
}

// Function to search job listings by title or company
function searchJobs(query) {
    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase())
    );
    displayJobs(filteredJobs);
}

// Event listener for search functionality
const searchInput = document.querySelector('#job-search');
searchInput.addEventListener('input', (event) => {
    searchJobs(event.target.value);
});

// Initial display of job listings
displayJobs();

// Example of adding a new job (you can call this function dynamically)
addJob({
    title: 'Software Engineer',
    company: 'Google',
    description: 'Build and scale innovative software solutions.'
});
