import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Faster Bike Taxi</h1>
      <ul className="navlist">
        <li className="navitem">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/bikedetails" className="nav-link">Bike Details</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
