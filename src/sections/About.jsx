import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-container about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text glass-panel">
          <p>
            Hello! I'm Masood Khan, a passionate Software Engineer and AI Developer. 
            My journey into tech began with a deep curiosity about how data can be transformed 
            into actionable insights, leading me to specialize in Machine Learning and Deep Learning.
          </p>
          <p>
            Today, I focus on building scalable AI solutions, developing robust NLP models, 
            and crafting computer vision applications. Whether it's creating a complex RAG chatbot, 
            detecting objects with YOLO, or building an intuitive React interface, I enjoy bridging the gap 
            between powerful backend algorithms and user-friendly frontends.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest research papers in AI, 
            optimizing neural network architectures, or working on innovative open-source projects.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">10+</span>
              <span className="highlight-label">AI/ML Projects</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">3+</span>
              <span className="highlight-label">Years of Focus</span>
            </div>
          </div>
        </div>
        
        <div className="about-image-wrapper">
          <div className="about-image-container glass-panel">
            <img 
              src="/profile.jpg" 
              alt="Masood Khan" 
              className="profile-img" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="about-image-placeholder" style={{ display: 'none' }}>
              <span>MK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
