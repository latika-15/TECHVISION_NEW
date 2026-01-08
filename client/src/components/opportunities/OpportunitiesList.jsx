import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './Opportunities.css';

const OpportunitiesList = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    try {
      const response = await api.get('/api/opportunities');
      setOpportunities(response.data);
    } catch (error) {
      console.error('Error fetching opportunities:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="opportunities-container">
      <h2>Opportunities</h2>
      <div className="opportunities-list">
        {opportunities.map((opp) => (
          <div key={opp._id} className="opportunity-card">
            <h3>{opp.title}</h3>
            <p><strong>Category:</strong> {opp.category}</p>
            <p><strong>Interest Area:</strong> {opp.interest_area}</p>
            <p><strong>Description:</strong> {opp.description}</p>
            <p><strong>Location:</strong> {opp.location}</p>
            <p><strong>Start Date:</strong> {new Date(opp.start_date).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {new Date(opp.end_date).toLocaleDateString()}</p>
            <a href={opp.link} target="_blank" rel="noopener noreferrer">Apply Here</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpportunitiesList;