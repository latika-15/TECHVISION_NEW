import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>TechVision</h2>
      </div>
      <nav className="sidebar-nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/build-profile">Build Profile</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/resume">Resume Builder</Link>
        <Link to="/opportunities">Opportunities</Link>
        <div className="sidebar-section">
          <h3>Learning Guides</h3>
          <Link to="/learning/ai-ml">AI/ML</Link>
          <Link to="/learning/app-dev">App Development</Link>
          <Link to="/learning/cloud">Cloud Computing</Link>
          <Link to="/learning/cybersecurity">Cybersecurity</Link>
          <Link to="/learning/dsa">DSA</Link>
          <Link to="/learning/dbms">DBMS</Link>
          <Link to="/learning/graphic-design">Graphic Design</Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;