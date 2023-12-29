import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import ApplyForm from './components/ApplyForm';
import DisplayBikes from './components/DisplayBikes';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/apply" element={<ApplyForm/>} />
          <Route path="/bikedetails" element={<DisplayBikes/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
