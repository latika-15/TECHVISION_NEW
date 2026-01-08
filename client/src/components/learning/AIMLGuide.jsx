import React from 'react';
import './LearningGuide.css';

const AIMLGuide = () => {
  const sections = [
    {
      id: 'basics',
      title: 'What is AI/ML?',
      content: 'AI (Artificial Intelligence) and ML (Machine Learning) are fields of computer science that focus on creating systems capable of learning and decision-making without being explicitly programmed.'
    },
    {
      id: 'resources',
      title: 'Resources & Certifications',
      content: (
        <ul>
          <li><a href="https://www.coursera.org/browse/data-science" target="_blank" rel="noopener noreferrer">Coursera: AI & ML Courses</a></li>
          <li><a href="https://www.edx.org/learn/machine-learning" target="_blank" rel="noopener noreferrer">edX: Machine Learning</a></li>
          <li>Google Professional Machine Learning Engineer</li>
          <li>Microsoft Certified: Azure AI Engineer Associate</li>
        </ul>
      )
    },
    // Add more sections...
  ];

  return (
    <div className="learning-guide">
      <header className="guide-header">
        <h1>AI/ML Guide</h1>
      </header>
      
      <nav className="guide-nav">
        {sections.map(section => (
          <a key={section.id} href={`#${section.id}`}>{section.title}</a>
        ))}
      </nav>
      
      <div className="guide-content">
        {sections.map(section => (
          <section key={section.id} id={section.id} className="guide-section">
            <h2>{section.title}</h2>
            <div className="section-content">
              {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
            </div>
          </section>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

const Footer = () => (
  <footer className="guide-footer">
    <div className="footer-content">
      <div className="footer-links">
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <div className="footer-contact">
        <p>Email: <a href="mailto:techvision@gmail.com">techvision@gmail.com</a></p>
        <p>© 2024 TechVision. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default AIMLGuide;