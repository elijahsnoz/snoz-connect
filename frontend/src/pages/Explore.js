// Explore.js
import React from 'react';
import PortfolioGrid from '../components/PortfolioGrid';

const Explore = () => {
  const sampleProjects = [
    { title: 'Project 1', description: 'Description of Project 1', image: '/images/project1.jpg' },
    { title: 'Project 2', description: 'Description of Project 2', image: '/images/project2.jpg' },
    { title: 'Project 3', description: 'Description of Project 3', image: '/images/project3.jpg' },
  ];

  return (
    <div className="explore-page">
      <h1 className="text-center my-5">Explore</h1>
      <PortfolioGrid projects={sampleProjects} />
    </div>
  );
};

export default Explore;
