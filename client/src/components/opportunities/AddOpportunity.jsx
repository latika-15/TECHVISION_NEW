import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './Opportunities.css';

const AddOpportunity = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Job',
    interest_area: 'Software Development',
    location: '',
    start_date: '',
    end_date: '',
    link: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/opportunities', formData);
      alert('Opportunity added successfully!');
      navigate('/opportunities');
    } catch (error) {
      console.error('Error adding opportunity:', error);
    }
  };

  return (
    <div className="add-opportunity-container">
      <h2>Add New Opportunity</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Job">Job</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="input-group">
          <label>Interest Area</label>
          <select
            name="interest_area"
            value={formData.interest_area}
            onChange={handleChange}
            required
          >
            <option value="Software Development">Software Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <div className="input-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Start Date</label>
          <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>End Date</label>
          <input
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Application Link</label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn-primary">Add Opportunity</button>
      </form>
    </div>
  );
};

export default AddOpportunity;