import React, { useState, useEffect } from "react";

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch job listings (simulated API call)
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.example.com/jobs"); // Replace with your job API
        const jobData = await response.json();
        setJobs(jobData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h3>Job Listings</h3>
      {loading ? (
        <p>Loading...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <h4>{job.title}</h4>
              <p>{job.description}</p>
              <button>Apply</button> {/* Add application logic */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobSearch;
