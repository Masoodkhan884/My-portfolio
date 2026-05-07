import React from 'react';
import './SkillBadge.css';

const SkillBadge = ({ skill, category }) => {
  return (
    <div className={`skill-badge skill-category-${category.toLowerCase()}`}>
      <span className="skill-name">{skill}</span>
    </div>
  );
};

export default SkillBadge;
