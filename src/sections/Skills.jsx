import React from 'react';
import SkillBadge from '../components/SkillBadge';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'SQL', 'C++', 'Java']
    },
    {
      title: 'AI / Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'Hugging Face']
    },
    {
      title: 'Concepts',
      skills: ['Deep Learning', 'Computer Vision', 'NLP', 'RAG Systems', 'Time Series', 'Predictive Modeling']
    },
    {
      title: 'Tools & Frameworks',
      skills: ['React', 'Streamlit', 'Flask', 'FastAPI', 'Git', 'Docker', 'AWS']
    }
  ];

  return (
    <section id="skills" className="section-container skills-section">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category glass-panel">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-badges">
              {category.skills.map((skill, i) => (
                <SkillBadge key={i} skill={skill} category={category.title.split(' ')[0]} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
