import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <h1 className="text-4xl font-bold">Welcome to Snoz Connect</h1>
        <p className="mt-2 text-lg">
          Empowering Creativity. Showcasing Innovation.
        </p>
        <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded">
          Get Started
        </button>
      </header>
      <main className="p-10">
        <h2 className="text-2xl font-bold mb-4">Explore Creative Works</h2>
        <p>Add gallery previews or highlights here.</p>
      </main>
    </div>
  );
};

export default Home;
