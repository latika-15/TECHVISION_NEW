import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [profileRes, recRes] = await Promise.all([
        api.get('/api/user/profile'),
        api.get('/api/recommendations')
      ]);
      
      setProfile(profileRes.data);
      setRecommendations(recRes.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <header className="sticky-header">
        <h1>Welcome, {profile?.first_name} {profile?.last_name}</h1>
      </header>

      {user?.is_new_user && (
        <section id="onboarding-section">
          <h2>Let's Build Your Profile</h2>
          <p>Welcome! Start by completing your profile so we can personalize your dashboard experience.</p>
          <button className="btn-primary" onClick={() => window.location.href = '/build-profile'}>
            Build Your Profile
          </button>
        </section>
      )}

      <section id="profile-section">
        <h2>Your Profile</h2>
        <div id="profile-details">
          <p><strong>Name:</strong> {profile?.first_name} {profile?.last_name}</p>
          <p><strong>Email:</strong> {profile?.email}</p>
          <p><strong>Phone:</strong> {profile?.phone}</p>
          <p><strong>School/College:</strong> {profile?.school_or_college}</p>
          <p><strong>Year/Class:</strong> {profile?.year_or_class}</p>
          <p><strong>Course Summary:</strong> {profile?.course_summary}</p>
          <p><strong>Interests:</strong> {profile?.interests?.map(i => i.interest).join(', ')}</p>
        </div>
        <div className="profile-link">
          <a href="/profile">View/Update Profile</a>
        </div>
      </section>

      <section id="recommendations-section">
        <h2>Recommendations for You</h2>
        {recommendations.map((rec, index) => (
          <div key={index} className="recommendation-card">
            <h3>{rec.category}</h3>
            <p>{rec.description}</p>
            <a href={rec.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;