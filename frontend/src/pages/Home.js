// Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="text-center my-5">
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my work and explore my creative journey.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
