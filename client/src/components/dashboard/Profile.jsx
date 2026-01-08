import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import './Dashboard.css';

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await api.get('/api/users/profile');
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {profile.first_name} {profile.last_name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone || 'N/A'}</p>
        <p><strong>School/College:</strong> {profile.school_or_college || 'N/A'}</p>
        <p><strong>Year/Class:</strong> {profile.year_or_class || 'N/A'}</p>
        <p><strong>Course Summary:</strong> {profile.course_summary || 'N/A'}</p>
        <p><strong>Interests:</strong> 
          {profile.interests && profile.interests.length > 0 
            ? profile.interests.map((interest, index) => (
                <span key={index}>{interest.interest} ({interest.expertise_level})</span>
              ))
            : 'N/A'}
        </p>
      </div>
      <button 
        className="btn-primary"
        onClick={() => window.location.href = '/build-profile'}
      >
        Update Profile
      </button>
    </div>
  );
};

export default Profile;