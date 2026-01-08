import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const BuildProfile = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    current_activity: '',
    phone: '',
    verification_code: '',
    school_class: '',
    college_name: '',
    year_or_class: '',
    semester: '',
    interests: []
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (step === 8) {
      try {
        await api.post('/api/user/build-profile', formData);
        alert('Profile built successfully!');
        navigate('/dashboard');
      } catch (error) {
        console.error('Error building profile:', error);
      }
    } else {
      setStep(step + 1);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="input-group">
            <label>What are you currently doing?</label>
            <select name="current_activity" value={formData.current_activity} onChange={handleChange} required>
              <option value="">-- Select --</option>
              <option value="school">School</option>
              <option value="college">College</option>
            </select>
          </div>
        );
      // Add other steps...
      default:
        return null;
    }
  };

  return (
    <div className="build-profile-container">
      <h2>Build Your Profile</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(step / 8) * 100}%` }}></div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {renderStep()}
        
        <div className="form-actions">
          {step > 1 && (
            <button type="button" className="btn-secondary" onClick={() => setStep(step - 1)}>
              Previous
            </button>
          )}
          <button type="submit" className="btn-primary">
            {step === 8 ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuildProfile;