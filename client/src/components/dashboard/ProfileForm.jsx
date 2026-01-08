import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './Dashboard.css';

const ProfileForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    school_or_college: '',
    year_or_class: '',
    course_summary: '',
    interests: [],
  });

  const [interest, setInterest] = useState('');
  const [expertiseLevel, setExpertiseLevel] = useState('Beginner');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddInterest = () => {
    if (interest.trim()) {
      setFormData({
        ...formData,
        interests: [...formData.interests, { interest, expertise_level: expertiseLevel }],
      });
      setInterest('');
      setExpertiseLevel('Beginner');
    }
  };

  const handleRemoveInterest = (index) => {
    const newInterests = [...formData.interests];
    newInterests.splice(index, 1);
    setFormData({ ...formData, interests: newInterests });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put('/api/users/profile', formData);
      alert('Profile updated successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="profile-form-container">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>School/College</label>
          <input
            type="text"
            name="school_or_college"
            value={formData.school_or_college}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Year/Class</label>
          <input
            type="text"
            name="year_or_class"
            value={formData.year_or_class}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Course Summary</label>
          <input
            type="text"
            name="course_summary"
            value={formData.course_summary}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Add Interest</label>
          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Enter interest"
          />
          <select
            value={expertiseLevel}
            onChange={(e) => setExpertiseLevel(e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button type="button" onClick={handleAddInterest}>
            Add Interest
          </button>
        </div>
        <div className="interests-list">
          {formData.interests.map((item, index) => (
            <div key={index} className="interest-item">
              <span>{item.interest} ({item.expertise_level})</span>
              <button type="button" onClick={() => handleRemoveInterest(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
        <button type="submit" className="btn-primary">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;