import React, { useEffect, useRef } from 'react'
import './Portfolio.css';
import ecommerce from '../../assets/ecom.jpg'
import education from '../../assets/education.jpeg'
import finance from '../../assets/finance.jpg'
import healthcare from '../../assets/healthcare.avif'
import travelling from '../../assets/travelling.png'
import datascience from '../../assets/data-science.webp'
import ai from '../../assets/ai.png'
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: ecommerce,
    description: "A comprehensive e-commerce solution with advanced features including user authentication, product management, shopping cart functionality, payment integration, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Gateway", "Admin Panel"]
  },
  {
    id: 2,
    title: "Educational Learning Platform",
    category: "EdTech",
    image: education,
    description: "An interactive learning management system designed for educational institutions. Features include course management, student progress tracking, interactive assessments, and real-time collaboration tools for enhanced learning experiences.",
    technologies: ["Next.js", "Python", "PostgreSQL", "WebRTC"],
    features: ["Course Management", "Progress Tracking", "Interactive Quizzes", "Video Conferencing", "Analytics Dashboard"]
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    category: "FinTech",
    image: finance,
    description: "A comprehensive financial analytics platform providing real-time insights into market trends, portfolio performance, and risk assessment. Features advanced charting, predictive analytics, and customizable reporting tools.",
    technologies: ["React", "Python", "PostgreSQL", "Chart.js"],
    features: ["Real-time Analytics", "Portfolio Tracking", "Risk Assessment", "Custom Reports", "Market Insights"]
  },
  {
    id: 4,
    title: "Healthcare Management System",
    category: "Healthcare",
    image: healthcare,
    description: "A secure and efficient healthcare management system designed for hospitals and clinics. Streamlines patient records, appointment scheduling, and medical inventory management with HIPAA compliance.",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    features: ["Patient Records", "Appointment Scheduling", "Inventory Management", "HIPAA Compliance", "Analytics Dashboard"]
  },
  {
    id: 5,
    title: "Travel Planning Platform",
    category: "Travel",
    image: travelling,
    description: "An intelligent travel planning platform that helps users discover destinations, plan itineraries, and book accommodations. Features AI-powered recommendations and real-time travel updates.",
    technologies: ["React", "Python", "PostgreSQL", "AI/ML"],
    features: ["Destination Discovery", "Itinerary Planning", "Booking Management", "AI Recommendations", "Travel Updates"]
  },
  {
    id: 6,
    title: "Data Science Analytics Tool",
    category: "Data Science",
    image: datascience,
    description: "A powerful data science platform for data analysis, visualization, and machine learning model development. Provides interactive dashboards and automated insights generation.",
    technologies: ["Python", "React", "PostgreSQL", "TensorFlow"],
    features: ["Data Analysis", "Interactive Dashboards", "ML Model Development", "Automated Insights", "Data Visualization"]
  },
  {
    id: 7,
    title: "AI-Powered Chatbot",
    category: "Artificial Intelligence",
    image: ai,
    description: "An intelligent chatbot solution powered by natural language processing and machine learning. Provides 24/7 customer support with context-aware responses and seamless integration.",
    technologies: ["Python", "React", "OpenAI API", "WebSocket"],
    features: ["Natural Language Processing", "Context Awareness", "24/7 Support", "Multi-language Support", "Analytics Dashboard"]
  }
];

function Portfolio() {
  const navigate = useNavigate();
  const observerRef = useRef(null);

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale');
    animatedElements.forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <div className="portfolio-hero">
        <div className="portfolio-hero-content">
          <h1 className="portfolio-hero-title fade-in-up">Our <span>Portfolio</span></h1>
          <p className="portfolio-hero-subtitle fade-in-up stagger-1">
            Discover our diverse range of successful projects across various industries. 
            We've delivered innovative solutions that drive business growth and user satisfaction.
          </p>
        </div>
      </div>

      {/* Portfolio Projects */}
      <div className="portfolio-section">
        <div className="portfolio-container">
          <h2 className="section-title fade-in-up">Featured Projects</h2>
          <div className="projects-grid">
            {portfolioProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card fade-in-up stagger-${Math.min(index + 1, 6)}`}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-category">{project.category}</div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  {/* <p className="project-description">{project.description}</p> */}
                  
                  <div className="project-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <div className="feature-tags">
                      {project.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio