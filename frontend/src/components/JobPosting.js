import React, { useState } from "react";

const JobPosting = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // Post a new job (simulated API call)
  const handlePostJob = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/post-job", {  // Replace with your job posting API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      const result = await response.json();
      console.log("Job posted:", result);
      alert("Job posted successfully!");
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Error posting job.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Post a New Job</h3>
      <label>Job Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter job title"
      />
      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter job description"
      />
      <button onClick={handlePostJob} disabled={loading}>
        {loading ? "Posting..." : "Post Job"}
      </button>
    </div>
  );
};

export default JobPosting;
