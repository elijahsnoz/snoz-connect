// Profile.js
import React from 'react';
import WorkDetail from '../components/WorkDetail';

const Profile = () => {
  const userWork = {
    title: 'Sample Work',
    description: 'This is a description of the user’s work.',
    image: '/images/sample-work.jpg',
  };

  return (
    <div className="profile-page">
      <h1 className="text-center my-5">My Profile</h1>
      <WorkDetail work={userWork} />
    </div>
  );
};

export default Profile;
