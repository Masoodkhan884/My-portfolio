import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [loopNum, setLoopNum] = useState(0);
  const words = ['Software Engineer', 'AI Engineer', 'ML Developer', 'Problem Solver'];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000); // pause at end
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>
      
      <div className="section-container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting">Hi there, I'm</p>
          <h1 className="hero-name">Masood Khan.</h1>
          <h2 className="hero-role">
            <span className="text-gradient">I am a </span> 
            <span className="typing-text">{text}</span><span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            I specialize in building intelligent systems, leveraging Machine Learning, 
            Computer Vision, and NLP to solve complex real-world problems. 
            From predictive models to modern web applications, I bring ideas to life.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
