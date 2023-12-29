import React, { useState, useEffect } from 'react';
import './DisplayBikes.css';
import { apiurl } from '../apiConfig';

const DisplayBikes = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${apiurl}/getAllBiketaxi`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setApplications(data);
        } else {
          console.error('Failed to fetch applications from the server');
        }
      } catch (error) {
        console.error('Error while fetching applications:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="display-submitted">
      <h2>Submitted Applications</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Bike Number</th>
            <th>Age</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr key={index}>
              <td>{application.name}</td>
              <td>{application.bikenumber}</td>
              <td>{application.age}</td>
              <td>{application.phonenumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayBikes;
