import React, { useEffect, useRef } from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faMobileAlt, 
  faCloud, 
  faChartBar, 
  faPalette, 
  faDatabase,
  faShieldAlt,
  faRocket,
  faBrain,
  faRobot
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: faBrain,
    title: "AI & Machine Learning",
    desc: "Design, train and optimize machine learning models tailored to your business. Expertise across classification, forecasting, NLP and computer vision.",
    features: ["Model Development", "NLP", "Computer Vision", "Model Optimization"]
  },
  {
    icon: faRobot,
    title: "Generative AI & LLM Integration",
    desc: "Build intelligent assistants and automate workflows using LLMs. Integrate OpenAI/Claude, implement RAG pipelines and fine-tune models for your domain.",
    features: ["OpenAI/Claude", "RAG Pipelines", "Chatbots", "Prompt Engineering"]
  },
  {
    icon: faDatabase,
    title: "Data Engineering & Pipelines",
    desc: "Reliable ETL/ELT pipelines and data platforms for analytics and AI. From warehousing to streaming and governance.",
    features: ["ETL/ELT", "Data Warehousing", "Streaming", "Orchestration (Airflow/DBT)"]
  },
  {
    icon: faCloud,
    title: "MLOps & Deployment",
    desc: "Deploy, monitor and scale ML systems with robust CI/CD and infrastructure.",
    features: ["Docker/Kubernetes", "Model Serving", "Monitoring", "Scaling"]
  },
  {
    icon: faCode,
    title: "Web Development",
    desc: "Modern, responsive websites and web applications built with cutting-edge technologies. From simple landing pages to complex e-commerce platforms.",
    features: ["React.js", "Node.js", "Next.js", "Full-stack Development"]
  },
  {
    icon: faMobileAlt,
    title: "Mobile Development",
    desc: "Cross-platform mobile applications for iOS and Android. Native and hybrid solutions that deliver exceptional user experiences.",
    features: ["React Native", "Flutter", "iOS Development", "Android Development"]
  },
  {
    icon: faPalette,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive user interfaces and seamless user experiences. We create designs that not only look great but also convert.",
    features: ["Figma", "Adobe XD", "Prototyping", "User Research"]
  },
  {
    icon: faDatabase,
    title: "Database Solutions",
    desc: "Robust database design and management solutions. From simple data storage to complex enterprise-level database architectures.",
    features: ["MongoDB", "PostgreSQL", "MySQL", "Database Optimization"]
  },
  {
    icon: faCloud,
    title: "Cloud Services",
    desc: "Scalable cloud infrastructure and DevOps solutions. Deploy, manage, and scale your applications with confidence.",
    features: ["AWS", "Azure", "Google Cloud", "DevOps"]
  },
  {
    icon: faChartBar,
    title: "Data Analytics",
    desc: "Transform your data into actionable insights. Advanced analytics and visualization solutions for informed decision-making.",
    features: ["Power BI", "Tableau", "Python Analytics", "Machine Learning"]
  },
  {
    icon: faShieldAlt,
    title: "Cybersecurity",
    desc: "Comprehensive security solutions to protect your digital assets. From vulnerability assessments to security implementation.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Security Training"]
  },
  {
    icon: faRocket,
    title: "Digital Transformation",
    desc: "End-to-end digital transformation services. Modernize your business processes and technology stack for the digital age.",
    features: ["Process Automation", "Legacy Migration", "Digital Strategy", "Change Management"]
  }
];

function Services() {
  const navigate = useNavigate();
  
  // Scroll animation logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page">
      <div className="services-services-hero">
        <div className="services-hero-content fade-in-up">
          <h1 className="services-hero-title">
            Our <span>Services</span>
          </h1>
          <p className="services-hero-subtitle">
            Comprehensive digital solutions tailored to transform your business and drive growth in the digital landscape.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, idx) => (
              <div 
                className={`service-card fade-in-scale stagger-delay-${(idx % 6) + 1}`} 
                key={idx}
              >
                <div className="service-icon-wrapper">
                  <FontAwesomeIcon icon={service.icon} className="service-icon" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                  <div className="service-features">
                    {service.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="why-choose-container">
          <h2 className="section-title fade-in-up">Why Choose <span>Us</span></h2>
          <div className="features-grid">
            <div className="feature-item fade-in-left stagger-delay-1">
              <div className="feature-icon">🎯</div>
              <h3>Expert Team</h3>
              <p>Experienced professionals with deep expertise in modern technologies and industry best practices.</p>
            </div>
            <div className="feature-item fade-in-right stagger-delay-2">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Agile development methodology ensuring quick turnaround times without compromising quality.</p>
            </div>
            <div className="feature-item fade-in-left stagger-delay-3">
              <div className="feature-icon">🛡️</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous testing and quality control processes to deliver bug-free, production-ready solutions.</p>
            </div>
            <div className="feature-item fade-in-right stagger-delay-4">
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock support and maintenance services to keep your applications running smoothly.</p>
            </div>
          </div>
        </div>
      </div>

  

    </div>
  );
}

export default Services;