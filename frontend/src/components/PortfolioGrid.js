// PortfolioGrid.js
import React from 'react';

const PortfolioGrid = ({ projects }) => {
  return (
    <div className="container my-5">
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={project.image} alt={project.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
