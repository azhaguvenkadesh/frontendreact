import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Faster Bike Taxi</h2>
      <p>Apply now to become a bike taxi driver and start earning!</p>
      <Link to="/apply" className="apply-button">Apply Now</Link>
    </div>
  );
};

export default Home;
