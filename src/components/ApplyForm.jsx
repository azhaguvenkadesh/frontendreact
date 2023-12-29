import React, { useState } from 'react';
import './ApplyForm.css';
import { apiurl } from '../apiConfig';

const ApplyForm = () => {
  const initialFormData = {
    name: '',
    bikenumber: '',
    age: '',
    phonenumber: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(`${apiurl}/addBiketaxi`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setIsSuccessModalOpen(true);
          setFormData(initialFormData);
        } else {
          console.error('Failed to submit application data to the server');
        }
      } catch (error) {
        console.error('Error while making the POST request:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = 'Name is required';
    }

    if (!data.bikenumber) {
      errors.bikenumber = 'Bike Number is required';
    }

    if (!data.age) {
      errors.age = 'Age is required';
    } else if (isNaN(data.age) || +data.age < 18) {
      errors.age = 'Age must be a number and at least 18 years old';
    }

    if (!data.phonenumber) {
      errors.phonenumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(data.phonenumber)) {
      errors.phonenumber = 'Invalid phone number format';
    }

    return errors;
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div className={`apply-form ${isSuccessModalOpen ? 'modal-open' : ''}`}>
      <h2>Apply to Join</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            required
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <label htmlFor='bikenumber'>Bike Number:</label>
          <input
            id='bikenumber'
            type="text"
            name="bikenumber"
            value={formData.bikenumber}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            required
          />
          {errors.bikenumber && <div className="error">{errors.bikenumber}</div>}
        </div>
        <div>
          <label htmlFor='age'>Age:</label>
          <input
            id='age'
            type="number"
            name="age"
            value={formData.age}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            required
          />
          {errors.age && <div className="error">{errors.age}</div>}
        </div>
        <div>
          <label htmlFor='phonenumber'>Phone Number:</label>
          <input
            id='phonenumber'
            type="tel"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            required
          />
          {errors.phonenumber && <div className="error">{errors.phonenumber}</div>}
        </div>
        <div>
          <button type="submit" disabled={isSuccessModalOpen}>Submit Application</button>
        </div>
      </form>

      {isSuccessModalOpen && (
        <div className="success-modal">
          <p>Your application has been submitted successfully!</p>
          <button onClick={closeSuccessModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ApplyForm;
