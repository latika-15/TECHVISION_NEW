import React from 'react';
import './LearningGuide.css';

const AppDevGuide = () => {
  const learningPath = [
    {
      stage: '1. Introduction to Programming',
      description: 'Learn programming basics using Python, JavaScript, or Java. Understand variables, loops, and functions.',
      duration: '2-3 Months'
    },
    // ... other stages
  ];

  return (
    <div className="learning-guide">
      <header className="guide-header">
        <h1>App Development Guide</h1>
      </header>
      <nav className="guide-nav">
        <a href="#intro">Introduction</a>
        <a href="#learning-path">Learning Path</a>
        <a href="#resources">Resources</a>
      </nav>
      <div className="guide-content">
        <section id="intro">
          <h2>Introduction</h2>
          <p>App development is a journey that combines creativity, logic, and problem-solving skills. Whether you aim to develop mobile apps for Android, iOS, or cross-platform, this guide will lead you through every stage, from the basics to deployment.</p>
        </section>
        <section id="learning-path">
          <h2>Learning Path</h2>
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Description</th>
                <th>Time Duration</th>
              </tr>
            </thead>
            <tbody>
              {learningPath.map((stage, index) => (
                <tr key={index}>
                  <td>{stage.stage}</td>
                  <td>{stage.description}</td>
                  <td>{stage.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section id="resources">
          <h2>Resources</h2>
          <ul>
            <li><a href="https://developer.android.com/">Android Developer</a></li>
            <li><a href="https://developer.apple.com/">iOS Developer</a></li>
            <li><a href="https://flutter.dev/">Flutter Framework</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AppDevGuide;