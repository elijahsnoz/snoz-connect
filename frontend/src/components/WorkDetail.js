// WorkDetail.js
import React from 'react';

const WorkDetail = ({ work }) => {
  if (!work) return <p>No work selected.</p>;

  return (
    <div className="container my-5">
      <h2>{work.title}</h2>
      <img src={work.image} alt={work.title} className="img-fluid my-3" />
      <p>{work.description}</p>
    </div>
  );
};

export default WorkDetail;
