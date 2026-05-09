import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import laptopPriceImg from '../assets/laptop_price.png';
import speechToTextImg from '../assets/speech_to_text.png';
import mediguideImg from '../assets/mediguide.png';
import brainTumorImg from '../assets/brain_tumor.png';
import ragChatbotImg from '../assets/rag_chatbot.png';
import weatherAiImg from '../assets/weather_ai.png';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'MediGuide Pro',
      description: 'An advanced healthcare assistant using AI to provide preliminary medical guidance and symptom analysis.',
      tags: ['Python', 'NLP', 'React', 'FastAPI'],
      category: 'NLP',
      imagePlaceholder: 'MediGuide',
      image: mediguideImg,
      githubLink: 'https://github.com/Masoodkhan884/madicine-Recomendation_system',
      demoLink: 'https://mediguidepro.streamlit.app/'
    },
    {
      title: 'Brain Tumor Detection',
      description: 'Deep learning model leveraging YOLO and SAM (Segment Anything Model) for precise tumor detection and segmentation in MRI scans.',
      tags: ['PyTorch', 'YOLO', 'Computer Vision'],
      category: 'Computer Vision',
      imagePlaceholder: 'Brain Tumor',
      image: brainTumorImg,
      githubLink: 'https://github.com/Masoodkhan884/Detection-and-segmentation-of-Brain-tumer',
      demoLink: 'https://detection-and-segmentation-of-brain-tumer-wyvgchzfjq9uuizsyf9t.streamlit.app/'
    },
    {
      title: 'RAG Chatbot',
      description: 'Intelligent document retrieval and generation system using LangChain and Hugging Face embeddings.',
      tags: ['LangChain', 'LLMs', 'Streamlit'],
      category: 'NLP',
      imagePlaceholder: 'RAG Chatbot',
      image: ragChatbotImg,
      githubLink: 'https://github.com/Masoodkhan884?tab=repositories',
      demoLink: '#'
    },
    {
      title: 'Weather Forecasting',
      description: 'Time series forecasting model predicting weather patterns using LSTM and GRU neural networks.',
      tags: ['TensorFlow', 'LSTM/GRU', 'Data Science'],
      category: 'Data Science',
      imagePlaceholder: 'Weather AI',
      image: weatherAiImg,
      githubLink: 'https://github.com/Masoodkhan884/weather-forecasting-project-NCAI-internship-project-',
      demoLink: '#'
    },
    {
      title: 'Object Detection & Tracking',
      description: 'Real-time object detection and tracking system using OpenCV and deep learning models.',
      tags: ['OpenCV', 'Python', 'YOLO'],
      category: 'Computer Vision',
      imagePlaceholder: 'Object Tracking',
      image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80',
      githubLink: 'https://github.com/Masoodkhan884/hand-writen-digit-pridiction',
      demoLink: '#'
    },
    {
      title: 'Restaurant Recommendation',
      description: 'Collaborative filtering recommendation system for personalized dining suggestions.',
      tags: ['Scikit-learn', 'Pandas', 'Flask'],
      category: 'Data Science',
      imagePlaceholder: 'RecSys',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      githubLink: 'https://github.com/Masoodkhan884/madicine-Recomendation_system',
      demoLink: 'https://rr-system.streamlit.app/'
    },
    {
      title: 'Next Word Prediction',
      description: 'NLP model for text generation and auto-completion using custom trained transformers.',
      tags: ['NLP', 'Transformers', 'PyTorch'],
      category: 'NLP',
      imagePlaceholder: 'Next Word',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
      githubLink: 'https://github.com/Masoodkhan884/next-word-prediction-app',
      demoLink: '#'
    },
    {
      title: 'Restaurants-Rating-Prediction',
      description: 'The Restaurant Rating Prediction App uses machine learning to analyze reviews, food quality, and service to predict ratings. ',
      tags: ['ML model', 'NLP', 'Streamlit'],
      category: 'Data Science',
      imagePlaceholder: 'Rating Prediction',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
      githubLink: 'https://github.com/Masoodkhan884/Restaurants-Rating-Prediction-',
      demoLink: 'https://rrp-app.streamlit.app/'
    },
    {
      title: 'Laptop price Prediction',
      description: 'A machine learning-powered Streamlit web app that predicts laptop prices based on specifications like brand, RAM, storage, screen resolution, CPU, and more. Built with Python and a trained regression model',
      tags: ['ML model', 'NLP', 'Streamlit'],
      category: 'Data Science',
      imagePlaceholder: 'price Prediction',
      image: laptopPriceImg,
      githubLink: 'https://github.com/Masoodkhan884/laptop-price-prediction',
      demoLink: 'https://laptop-price-prediction-ksregbmsojapp3bpfeuygp7.streamlit.app/'
    },
    {
      title: 'speech-to-text-converter',
      description: 'Voice to Text conversion using Speech Recognition',
      tags: ['voice model', 'Speech Recognition', 'Streamlit'],
      category: 'NLP',
      imagePlaceholder: 'Speech-to-Text',
      image: speechToTextImg,
      githubLink: 'https://github.com/Masoodkhan884/speech-to-text-converter',
      demoLink: 'https://speech-to-text-converter-kwsrmmmfepml4fny9zsgez.streamlit.app/'
    }
  ];

  const categories = ['All', 'Computer Vision', 'NLP', 'Data Science'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-container projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
